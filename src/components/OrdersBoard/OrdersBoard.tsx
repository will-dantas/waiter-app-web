import React, { useState } from 'react';
import { Board, OrdersContainer, RequestsNumber } from './OrdersBoard.styles';
import { IOrdersBoard } from './OrdersBoard.interface';
import { OrderModal } from '../OrderModal/OrderModal';
import { IOrder } from '../../types/Orders.interface';
import { IconsRequests } from '../../common/IconsRequest';
import { DeleteOrder } from '../../services/DeleteOrder/DeleteOrder';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { UpdateOrder } from '../../services/UpdateOrder/UpdateOrder';
import { StatusName } from '../../common/StatusName';

export const OrdersBoard = ({ icon, title, orders, onCancelOrder, onUpdateOrder }: IOrdersBoard) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | IOrder>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenModal = (order: IOrder) => {
    setIsVisibleModal(true);
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setIsVisibleModal(false);
    setSelectedOrder(null);
  };

  const handleUpdateOrder = async () => {
    if (!selectedOrder) {
      return;
    }

    const status = selectedOrder.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';
    const orderId = selectedOrder._id;

    await new UpdateOrder().execute(orderId, status).then(() => {
      onUpdateOrder(selectedOrder._id, status);
      setIsLoading(false);
      setIsVisibleModal(false);
      toast.success(`O pedido da mesa ${selectedOrder.table} está ${StatusName(status)}!`);
    }).catch((error: AxiosError) => {
      toast.error('Ocorreu algum erro, tente novamente!');
      console.log(error);
    });
  };

  const handleCancelOrder = async () => {
    if (!selectedOrder) {
      return;
    }

    setIsLoading(true);

    await new DeleteOrder().execute(selectedOrder._id).then(() => {

      onCancelOrder(selectedOrder._id);
      setIsLoading(false);
      setIsVisibleModal(false);
      toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado!`);
    }).catch((error: AxiosError) => {
      toast.error('Ocorreu algum erro, tente novamente!');
      console.log(error);
    });
  };

  return (
    <Board>
      <OrderModal
        visible={isVisibleModal}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCalcelOrder={handleCancelOrder}
        onUpdateOrder={handleUpdateOrder}
        isLoading={isLoading}
      />
      <header>
        {IconsRequests(icon)}
        <strong>{title}</strong>
        <RequestsNumber>{orders.length}</RequestsNumber>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              key={order._id}
              type="button"
              onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
};
