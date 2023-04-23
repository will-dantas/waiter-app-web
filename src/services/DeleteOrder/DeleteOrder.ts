import { AxiosResponse } from 'axios';
import { api } from '../api';

export class DeleteOrder {
  async execute(orderId: string): Promise<AxiosResponse> {
    return api.delete(`/order/${orderId}`);
  }
}
