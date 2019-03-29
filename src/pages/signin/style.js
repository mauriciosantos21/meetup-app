import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const Button = styled.button`
  opacity: 0.6;
  font-size: 16px;
  color: #ffffff;
  text-align: left;
  margin-top: 20px;
  background: transparent;
  border: 0;
`;

export const Form = styled.form`
  margin-top: 30px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  label {
    width: 100%;
    font-size: 16px;
    color: #ffffff;

    span {
      display: block;
      font-weight: bold;
    }
  }
  input {
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
    margin-bottom: 40px;
    text-align: left;
    color: #ffffff;
    background: transparent;
    border: none;
    opacity: 0.5;
    &::placeholder {
      color: #ffffff;
    }
  }
  button {
    background-color: #e5556e;
    height: 50px;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    border-radius: 100px;
    border: none;
  }
`;
