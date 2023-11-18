import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;
export const TitleFilter = styled.p`
  text-align: center;
`;
export const Input = styled.input`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6px;
  padding: 10px;
  width: 500px;

  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  background-color: #f9f1f1;
  box-shadow: darkgreen;
  &::placeholder {
    color: #ffffff;
    font-style: italic;
  }
  &:focus {
    border: 2px solid rgba(33, 33, 33, 0.2);
  }
`;
