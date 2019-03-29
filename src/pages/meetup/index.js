import React from 'react';
import { Container } from './style';
import meetup from '../../assets/meetup.jpeg';

const Meetup = () => (
  <Container>
    <div className="image-meetup">
      <img src={meetup} alt="Imagem do meetup" />
    </div>
    <div>
      <h3>Meetup React Native</h3>
      <span className="span-title">120 membros</span>
      <p>
        O meetup de React Native é um espaço para discutir sobre tecnologias por volta do
        desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces móveis
        multiplataforma com Javascript.
      </p>
      <span>Realizado em:</span>
      <h4>Rua Guilherme Gembala, 260, Rio do Sul - SC</h4>
      <button type="button">Inscreva-se</button>
    </div>
  </Container>
);
export default Meetup;
