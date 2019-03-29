import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
  }
  p {
    opacity: 0.8;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    text-align: left;
    width: 315px;
    margin-top: 14px;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
    margin-top: 30px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-content: left;
  label {
    width: 100%;
    font-size: 18px;
    color: #ffffff;
    margin-top: 14px;
    span {
      vertical-align: middle;
      display: inline-block;
      &:not(.fake-check) {
        margin-left: 10px;
        font-size: 18px;
      }
    }
    input {
      width: 0px;
      height: 0px;
      position: absolute;
      visibility: hidden;
      background: transparent;

      & + .fake-check {
        width: 20px;
        height: 20px;
        display: inline-block;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
      }

      &:checked + .fake-check {
        background: #e5556e;
      }
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
    margin-top: 20px;
  }
`;
