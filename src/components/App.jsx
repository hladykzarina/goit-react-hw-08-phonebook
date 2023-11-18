import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from 'routes/PrivatRoute';
import PublicRoute from 'routes/PublicRoute';
import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import Loader from 'components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import { ToastContainer } from 'react-toastify';

const PageHome = lazy(() => import('view/PageHome/PageHome'));
const PageRegistration = lazy(() =>
  import('view/PageRegistration/PageRegistration')
);
const PageLogin = lazy(() => import('view/PageLogin/PageLogin'));
const PageContacts = lazy(() => import('view/PageContacts/PageContacts'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  <PublicRoute>
                    <PageHome />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <PageRegistration />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <PageLogin />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <PageContacts />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
          <ToastContainer autoClose={3700} position="top-center" />
        </>
      )}
    </>
  );
};

export default App;
