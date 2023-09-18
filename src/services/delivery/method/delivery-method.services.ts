import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TDeliveryMethodItem } from './delivery-method.types';

export const fetchGetDeliveryMethods = async (): Promise<SR<TDeliveryMethodItem>> => {
  const res = await api.get('/admin/delivery-methods');
  return res.data;
};
export const fetchPostDeliveryMethod = async (
  values: TDeliveryMethodItem,
): Promise<SRO<TDeliveryMethodItem>> => {
  const res = await api.post('/admin/delivery-methods', values);
  return res.data;
};
export const fetchEditDeliveryMethod = async (
  values: TDeliveryMethodItem,
): Promise<SRO<TDeliveryMethodItem>> => {
  const res = await api.post(`/admin/delivery-methods/${values.id}`, values);
  return res.data;
};
export const fetchDeleteDeliveryMethod = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/delivery-methods/${id}`);
  return res.data;
};
