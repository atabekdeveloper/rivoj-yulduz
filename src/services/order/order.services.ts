/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParams, TMessage } from 'src/services/index.types';

import {
  TOrderAttachChange,
  TOrderChange,
  TOrderContactChange,
  TOrderItem,
  TPortGetItem,
  TPostOrderChange,
} from './order.types';

export const fetchGetOrders = async (values: TGetParams): Promise<SR<TOrderItem>> => {
  const res = await api.get('/admin/orders', { params: values });
  return res.data;
};
export const fetchGetOrderItem = async (id: number): Promise<SRO<TOrderItem>> => {
  const res = await api.get(`/admin/orders/${id}`);
  return res.data;
};
export const fetchPostOrder = async (values: TPostOrderChange): Promise<SRO<TPortGetItem>> => {
  const res = await api.post('/orders', values);
  return res.data;
};
export const fetchPostOrderAttach = async (
  values: TOrderAttachChange,
): Promise<SRO<TPortGetItem>> => {
  const res = await api.post(`/admin/orders/${values.orderId}/users/${values.userId}`);
  return res.data;
};
export const fetchEditOrder = async (values: TOrderChange): Promise<SRO<TOrderItem>> => {
  const res = await api.put(`/admin/orders/${values.id}`, values);
  return res.data;
};
export const fetchEditOrderItem = async (values: TOrderContactChange): Promise<SRO<TOrderItem>> => {
  const res = await api.patch(`/admin/contacts/${values.id}`, values);
  return res.data;
};
export const fetchDeleteOrder = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/orders/${id}`);
  return res.data;
};
export const fetchDeleteOrderAttach = async (values: TOrderAttachChange): Promise<TMessage> => {
  const res = await api.delete(`/admin/orders/${values.orderId}/users/${values.userId}`);
  return res.data;
};
