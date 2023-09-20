import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TOrderChange, TOrderItem } from './order.types';

export const fetchGetOrders = async (): Promise<SR<TOrderItem>> => {
  const res = await api.get('/admin/orders');
  return res.data;
};
export const fetchEditOrder = async (values: TOrderChange): Promise<SRO<TOrderItem>> => {
  const res = await api.put(`/admin/orders/${values.id}`, values);
  return res.data;
};
export const fetchDeleteOrder = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/orders/${id}`);
  return res.data;
};
