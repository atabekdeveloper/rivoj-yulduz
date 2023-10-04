/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TPointChange, TPointItem, TPointTypeItem } from './point.types';

export const fetchGetPoints = async (): Promise<SR<TPointItem>> => {
  const res = await api.get('/admin/points');
  return res.data;
};
export const fetchGetPointTypes = async (): Promise<SR<TPointTypeItem>> => {
  const res = await api.get('/admin/point-types');
  return res.data;
};
export const fetchPostPoint = async (values: TPointChange): Promise<SRO<TPointItem>> => {
  const res = await api.post('/admin/points', values);
  return res.data;
};
export const fetchEditPoint = async (values: TPointChange): Promise<SRO<TPointItem>> => {
  const res = await api.put(`/admin/points/${values.id}`, values);
  return res.data;
};
export const fetchDeletePoint = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/points/${id}`);
  return res.data;
};
