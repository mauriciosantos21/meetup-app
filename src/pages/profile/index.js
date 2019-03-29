import React from 'react';

import { Container, Form } from './style';

const items = ['Front-end', 'Back-end', 'Mobile', 'DevOps', 'Gestão', 'Marketing'];

const Profile = () => (
  <Container>
    <div>
      <Form>
        <label className="user">
          <span className="user">Nome</span>
          <input className="user" type="text" placeholder="Nome" />
        </label>
        <label className="user">
          <span className="user">Senha</span>
          <input className="user" type="password" placeholder="Sua senha secreta" />
        </label>
        <label className="user">
          <span className="user">Confirmação de senha</span>
          <input className="user" type="password" placeholder="Sua senha secreta" />
        </label>
        <h3>Preferências</h3>
        {items.map(label => (
          <label key={label}>
            <input type="checkbox" />
            <span className="fake-check" />
            <span>{label}</span>
          </label>
        ))}
        <button type="submit">Salvar</button>
      </Form>
    </div>
  </Container>
);

export default Profile;
