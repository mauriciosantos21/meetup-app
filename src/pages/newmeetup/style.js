import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 315px;
  min-width: 315px;
  display: flex;
  flex-direction: column;
  align-content: left;
  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
    margin-top: 40px;
  }
  label:nth-child(5) {
    margin-top: 20px;
  }
  label.user {
    margin-top: 40px;
  }
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
    span.user {
      margin: 0;
      font-size: 16px;
      font-weight: bold;
      display: block;
    }
    input.user {
      height: 24px;
      visibility: visible;
      border: 0;
      width: 100%;
      position: initial;
      margin-top: 10px;
      &::placeholder {
        font-size: 20px;
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
