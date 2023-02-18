import { IOrder } from '../../types/Orders.interface';

export interface IOrdersBoard {
  icon: string;
  title: string;
  orders: IOrder[];
}
