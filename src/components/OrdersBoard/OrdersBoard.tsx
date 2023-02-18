import { useState } from "react";
import { Board, OrdersContainer, RequestsNumber } from "./OrdersBoard.styles";
import { IOrdersBoard } from "./OrdersBoard.interface";
import { OrderModal } from "../OrderModal/OrderModal";
import { IOrder } from "../../types/Orders.interface";
import { IconsRequests } from "../../common/IconsRequest";

export const OrdersBoard = ({ icon, title, orders }: IOrdersBoard) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | IOrder>(null);

  const handleOpenModal = (order: IOrder) => {
    setIsVisibleModal(true);
    setSelectedOrder(order)
  }

  return (
    <Board>
      <OrderModal
        visible={isVisibleModal}
        order={selectedOrder}
      />
      <header>
        {IconsRequests(icon)}
        <strong>{title}</strong>
        <RequestsNumber>{orders.length}</RequestsNumber>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
};
