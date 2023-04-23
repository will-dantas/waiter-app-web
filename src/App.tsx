import React from 'react';
import { Header } from './components/Header/Header';
import { Orders } from './components/Orders/Orders';
import { GlobalStyles } from './styles/global-styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position='bottom-center'/>
    </>
  );
}
