/*.listItem {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  align-items: center;
}

.listItem button {
  margin-top: 12px;
  color: rgb(26, 26, 26);
  border-radius: 22px;
  box-shadow: 4px 4px 4px #b2d7ff;
  margin-right: 70%;
  transition: all 200ms ease-in-out;
  outline: none;
  border: 1px solid transparent;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  color: rgb(247, 241, 241);
  background: rgb(197, 197, 246);
  box-shadow: none;
}

.listUserser {
  margin: 0;
  display: flex;
  justify-content: space-between;
}
*/
import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Error = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.62;
  letter-spacing: 0.03em;
  text-align: center;
  color: #232323;
`;
