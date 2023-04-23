import { AxiosResponse } from 'axios';
import { api } from '../api';

export class UpdateOrder {
  async execute(orderId: string, status: string): Promise<AxiosResponse> {
    return api.patch(`/order/${orderId}`, { status });
  }
}


