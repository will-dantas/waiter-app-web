import React from 'react';
import { Header } from './components/Header/Header';
import { Orders } from './components/Orders/Orders';
import { GlobalStyles } from './styles/global-styles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
