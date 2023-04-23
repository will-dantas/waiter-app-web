import { IOrder } from '../../types/Orders.interface';

export interface IOrderModal {
  visible: boolean;
  order: null | IOrder
  onClose: () => void;
  onCalcelOrder: () => Promise<void>;
  onUpdateOrder: () => Promise<void>;
  isLoading: boolean;
}
