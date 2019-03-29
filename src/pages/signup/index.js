import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, Form, Button } from './style';

const Signup = () => (
  <Container>
    <img src={logo} alt="logo" />
    <Form>
      <label>
        <span>Nome</span>
        <input type="text" placeholder="Digite seu nome" />
      </label>
      <label>
        <span>Email</span>
        <input type="text" placeholder="Digite seu email" />
      </label>
      <label>
        <span>Senha</span>
        <input type="password" placeholder="Digite sua senha" />
      </label>
      <button type="submit">Criar conta</button>
    </Form>
    <Link to="/">
      <Button>Já tenho conta</Button>
    </Link>
  </Container>
);

export default Signup;
