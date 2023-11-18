import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input`
  height: 40px;

  background: #e9efed;
  border: 1px solid transparent;
  outline: none;
  border-radius: 10px;
  box-shadow: inset 4px #e9efed;
  text-indent: 20px;
  &::placeholder {
    color: black;
    font-style: italic;
  }
  &:focus {
    background-color: #f9f1f1;
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 350px;
  background: #ecf1f6;
  border: 1px solid transparent;
  outline: none;
  border-radius: 10px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  box-shadow: inset 4px lightgreen;
  padding: 0 20px;
  transition: all 200ms ease-in-out;

  &:hover,
  &:focus {
    box-shadow: none;
    color: white;
    background: rgb(10, 116, 17);
  }
`;
