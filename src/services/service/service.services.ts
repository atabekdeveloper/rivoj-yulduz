import { api } from 'src/api';
import { SRO, TMessage } from 'src/services/index.types';

import { TServiceChange } from './service.types';

export const fetchGetServices = async (): Promise<SRO<null>> => {
  const res = await api.get('/admin/services');
  return res.data;
};
export const fetchPostService = async (values: TServiceChange): Promise<TMessage> => {
  const res = await api.post('/admin/services', values);
  return res.data;
};
export const fetchDeleteService = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/services/${id}`);
  return res.data;
};
