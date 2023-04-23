import styled from 'styled-components';

export const Board = styled.header`
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  -webkit-box-shadow: 0px 14px 24px -14px rgba(0,0,0,0.31);
  -moz-box-shadow: 0px 14px 24px -14px rgba(0,0,0,0.31);
  box-shadow: 0px 14px 24px -14px rgba(0,0,0,0.31);

  > header {
    padding: 0.5rem;
    font-size: 0.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  button {
    background: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 6rem;
    border-radius: 0.5rem;
    border-bottom: 4px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    transition: 0.3s;

    &:hover {
      background: #CCCCCC;
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666;
    }

    & + button {
      margin-top: 0.5rem;
    }
  }
`;

export const RequestsNumber = styled.span`
  border-radius: 1rem;
  padding: 0.7rem;
  width: auto;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background: #cccccc;
  flex: 1;
`;
