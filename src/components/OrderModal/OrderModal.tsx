import React from 'react';
import { IOrderModal } from './OrderModal.interface';
import {
  Overlay,
  ModalBodyHeader,
  OrderDetails,
  ImageOrders,
  SpanItens,
  ProdutcDatailsDiv,
  TotalPriceOrders,
  Actions,
  ModalBodyFooter,
  ModalBody,
} from './OrderModal.styles';
import CloseIcon from '../../assets/images/close-icon.svg';
import { IconsRequests } from '../../common/IconsRequest';
import { StatusName } from '../../common/StatusName';
import { FormatCurrency } from '../../utils/formatCurrency';

export const OrderModal = ({ visible, order, onClose, onCalcelOrder, isLoading, onUpdateOrder }: IOrderModal) => {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <ModalBodyHeader>
          <header>
            <strong>Mesa {order?.table}</strong>
            <button type="button" onClick={onClose}>
              <img src={CloseIcon} alt="icone de fechar" />
            </button>
          </header>
          <div className="status-container">
            <small>Status do Pedido</small>
            <div>
              {IconsRequests(order.status)}
              <strong>{StatusName(order.status)}</strong>
            </div>
          </div>
          <OrderDetails>
            <strong>Itens</strong>
            <div className="order-itens">
              {order?.products.map(({ _id, product, quantity }) => (
                <div className="item" key={_id}>
                  <ImageOrders
                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                    alt={product.name}
                  />
                  <SpanItens>{quantity}x</SpanItens>

                  <ProdutcDatailsDiv>
                    <strong>{product.name}</strong>
                    <span>{FormatCurrency(product.price)}</span>
                  </ProdutcDatailsDiv>
                </div>
              ))}
            </div>
          </OrderDetails>
        </ModalBodyHeader>
        <ModalBodyFooter>
          <TotalPriceOrders>
            <span>Total</span>
            <strong>{FormatCurrency(total)}</strong>
          </TotalPriceOrders>

          <Actions>
            {
              order.status !== 'DONE' && (
                <button
                  type="button"
                  className="primary"
                  disabled={isLoading}
                  onClick={onUpdateOrder}
                >
                  <strong>
                    {order.status === 'WAITING' && 'Iniciar pedido'}
                    {order.status === 'IN_PRODUCTION' && 'Fizalizar pedido'}
                  </strong>
                </button>
              )
            }
            <button
              type="button"
              className="secundary"
              disabled={isLoading}
              onClick={onCalcelOrder}
            >
              <strong>
                {order.status !== 'DONE' ? 'Cancelar Pedido' : 'Retirar pedido'}
              </strong>
            </button>
          </Actions>
        </ModalBodyFooter>
      </ModalBody>
    </Overlay>
  );
};
