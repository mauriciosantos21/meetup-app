import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, Form, Button } from './style';

const Signin = () => (
  <Container>
    <img src={logo} alt="logo" />
    <Form>
      <label>
        <span>Email</span>
        <input type="text" placeholder="Digite seu email" />
      </label>
      <label>
        <span>Senha</span>
        <input type="password" placeholder="Digite sua senha" />
      </label>
      <button type="submit">Entrar</button>
    </Form>
    <Link to="/signup">
      <Button>Criar conta grátis</Button>
    </Link>
  </Container>
);

export default Signin;
