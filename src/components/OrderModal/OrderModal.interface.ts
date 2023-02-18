import { IOrder } from '../../types/Orders.interface';

export interface IOrderModal {
  visible: boolean;
  order: null | IOrder
}
