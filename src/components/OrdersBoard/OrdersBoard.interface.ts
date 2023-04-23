import { IOrder } from '../../types/Orders.interface';

export interface IOrdersBoard {
  icon: string;
  title: string;
  onCancelOrder: (orderId: string) => void;
  onUpdateOrder: (orderId: string, status: IOrder['status']) => void;
  orders: IOrder[];
}
