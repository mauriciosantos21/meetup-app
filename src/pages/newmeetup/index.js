import React from 'react';
import { Container, Form } from './style';

const items = ['Front-end', 'Back-end', 'Mobile', 'DevOps', 'Gestão', 'Marketing'];

const NewMeetup = () => (
  <Container>
    <div>
      <Form>
        <label className="user">
          <span className="user">Título</span>
          <input className="user" type="text" placeholder="Digite o título do meetup" />
        </label>
        <label className="user">
          <span className="user">Descrição</span>
          <input className="user" type="text" placeholder="Descreva seu meetup" />
        </label>
        <span>Imagem</span>
        <label className="user">
          <span className="user">Localização</span>
          <input className="user" type="text" placeholder="Onde seu meetup irá acontecer?" />
        </label>
        <h3>Tema do meetup</h3>
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

export default NewMeetup;
