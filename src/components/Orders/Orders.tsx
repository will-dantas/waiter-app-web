import { Container } from "./Orders.styles";
import { OrdersBoard } from "../OrdersBoard/OrdersBoard";
import { IOrder } from "../../types/Orders.interface";

export const Orders = () => {
  const order: IOrder[] = [
    {
      _id: "63dd2a422441d7b39bd707a1",
      table: "123",
      status: "WAITING",
      products: [
        {
          product: {
            _id: "63dd1b73acaebf9b968464d9",
            name: "Pizza quatro queijos",
            description: "A melhor",
            imagePath: "1675434867544-quatro-queijos.png",
            price: 40,
            ingredients: [
              {
                name: "Mussarela",
                _id: "63dd1b73acaebf9b968464da",
              },
              {
                name: "Gorgonzola",
                _id: "63dd1b73acaebf9b968464db",
              },
              {
                name: "Cheese",
                _id: "63dd1b73acaebf9b968464dc",
              },
              {
                name: "Chedar",
                _id: "63dd1b73acaebf9b968464dd",
              },
            ],
          },
          quantity: 3,
          _id: "63dd2a422441d7b39bd707a2",
        },
        {
          product: {
            _id: "63dd1ffbeee332d717818835",
            name: "Coca Cola",
            description: "Coca Cola topzeira",
            imagePath: "1675436027507-coca-cola.png",
            price: 6,
            ingredients: [],
          },
          quantity: 2,
          _id: "63dd2a422441d7b39bd707a3",
        },
      ],
    },
  ];

  return (
    <Container>
      <OrdersBoard icon="WAITING" title="Fila de espera" orders={order} />
      <OrdersBoard icon="IN_PRODUCTION" title="Em preparação" orders={[]} />
      <OrdersBoard icon="DONE" title="Pronto" orders={[]} />
    </Container>
  );
};
