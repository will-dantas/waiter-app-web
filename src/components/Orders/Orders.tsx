import React, { useEffect, useState } from 'react';
import socketIo from 'socket.io-client';
import { Container } from './Orders.styles';
import { OrdersBoard } from '../OrdersBoard/OrdersBoard';
import { IOrder } from '../../types/Orders.interface';
import { GetOrders } from '../../services/GetOrders/GetOrders';
import { toast } from 'react-toastify';

export const Orders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const socket = socketIo('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('orders@new', (order) => {
      setOrders(prevState => prevState.concat(order));
      toast.success(`Um pedido foi adcionado à mesa ${order.table}!`);
    });
  }, []);

  useEffect(() => {
    new GetOrders().execute().then(({ data }) => {
      setOrders(data);
    });
  }, []);

  const waiting = orders.filter((order) => order.status === 'WAITING');

  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');

  const done = orders.filter((order) => order.status === 'DONE');

  const handleCancelOrder = (orderId: string) => {
    setOrders((prevState) => prevState.filter((order) => order._id !== orderId));
  };

  const handleOrderStatusUpdate = (orderId: string, status: IOrder['status']) => {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId ? { ...order, status } : order
    )));
  };

  return (
    <Container>
      <OrdersBoard
        icon="WAITING"
        title="Fila de espera"
        onCancelOrder={handleCancelOrder}
        onUpdateOrder={handleOrderStatusUpdate}
        orders={waiting} />
      <OrdersBoard
        icon="IN_PRODUCTION"
        title="Em preparação"
        onCancelOrder={handleCancelOrder}
        onUpdateOrder={handleOrderStatusUpdate}
        orders={inProduction} />
      <OrdersBoard
        icon="DONE"
        title="Pronto"
        onCancelOrder={handleCancelOrder}
        onUpdateOrder={handleOrderStatusUpdate}
        orders={done} />
    </Container>
  );
};
