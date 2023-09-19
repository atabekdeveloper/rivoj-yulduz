import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TServiceChange, TServiceItem } from './service.types';

export const fetchGetServices = async (): Promise<SR<TServiceItem>> => {
  const res = await api.get('/admin/services');
  return res.data;
};
export const fetchPostService = async (values: TServiceChange): Promise<TMessage> => {
  const res = await api.post('/admin/services', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
export const fetchEditService = async (values: TServiceChange): Promise<SRO<TServiceItem>> => {
  const res = await api.post(
    `/admin/services/${values.id}`,
    { ...values, _method: 'PUT' },
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );
  return res.data;
};
export const fetchDeleteService = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/services/${id}`);
  return res.data;
};
