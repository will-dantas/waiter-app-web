import React from 'react';
import Logo from '../../assets/images/logo.svg';
import { Container, Content } from './Header.styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={Logo} alt="logo waiter-app" />
      </Content>
    </Container>
  );
};
