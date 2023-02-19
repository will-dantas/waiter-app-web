import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > strong {
      font-size: 1.5rem;
    }

    > button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-itens {
    margin-top: 1rem;
  }

  .item {
    display: flex;

    & + .item {
      margin-top: 1rem;
    }
  }
`;

export const ImageOrders = styled.img`
  border-radius: 0.375rem;
  max-width: 5rem;
  height: auto;
  object-fit: cover;
`;

export const SpanItens = styled.span`
  font-size: 0.875rem;
  color: #666;
  display: block;
  min-width: 1.25rem;
  margin-left: 0.75rem;
`;

export const ProdutcDatailsDiv = styled.span`
  margin-left: 0.25rem;

  strong {
    display: block;
    margin-bottom: 0.25rem;
  }

  span {
    font-size: 0.875rem;
    color: #666;
  }
`;

export const TotalPriceOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;

  span {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  .primary {
    background: #333333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: 0.3s;

    &:hover {
      background: #666666;
    }
  }

  .secundary {
    background: #d73035;
    margin-top: 1rem;
    padding: 12px 24px;
    color: #fff;
    border: 0;
    font-weight: bold;
    border-radius: 48px;
    transition: 0.3s;

    &:hover {
      background: #8a1114;
    }
  }
`;
