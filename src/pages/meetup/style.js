import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  img {
    width: 700px;
    height: 400px;
  }
  button {
    background-color: #e5556e;
    height: 50px;
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    border-radius: 100px;
    border: none;
    width: 100%;
  }

  span {
    font-size: 14px;
    color: #999999;
    text-align: left;
  }
  p {
    opacity: 0.8;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    text-align: left;
    width: 315px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  h3 {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    text-align: left;
    margin-bottom: 5px;
  }
  h4 {
    font-size: 16px;
    color: #ffffff;
    text-align: left;
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;
