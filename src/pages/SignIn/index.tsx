import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />

      <Title>Faça seu logon</Title>

      <Button>Entrar</Button>
    </Container>
  );
};

export default SignIn;
