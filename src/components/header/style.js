import styled from 'styled-components';

export const MenuBar = styled.header`
  background: #e5556e;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    margin-left: 30px;
  }
  button {
    background: transparent;
    margin-left: 30px;
    font-size: 16px;
    color: #ffffff;
    border: 0;
    font-weight: bold;
  }

  .icon-user {
    color: #fff;
  }

  nav {
    flex-grow: 1;
    ul {
      display: flex;
      li {
      }
    }
  }

  .user-menu-button {
    width: 50px;
    height: 50px;
  }
`;
