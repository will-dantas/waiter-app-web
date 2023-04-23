import { AxiosResponse } from 'axios';
import { api } from '../api';

export class GetOrders {
  async execute(): Promise<AxiosResponse> {
    return api.get('/orders');
  }
}
