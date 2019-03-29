import React from 'react';

import { Container, Form } from './style';

const items = ['Front-end', 'Back-end', 'Mobile', 'DevOps', 'Gestão', 'Marketing'];

const Preferences = () => (
  <Container>
    <div>
      <h3>Olá, nome</h3>
      <p>
        Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
        selecionarmos os melhores meetups pra você:
      </p>
      <h4>Preferências</h4>
      <Form>
        {items.map(label => (
          <label key={label}>
            <input type="checkbox" />
            <span className="fake-check" />
            <span>{label}</span>
          </label>
        ))}
        <button type="submit">Continuar</button>
      </Form>
    </div>
  </Container>
);

export default Preferences;
