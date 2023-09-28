/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParams, TMessage } from 'src/services/index.types';

import { TSupportChange, TSupportItem } from './support.types';

export const fetchGetSupports = async (values: TGetParams): Promise<SR<TSupportItem>> => {
  const res = await api.get('/admin/supports', { params: values });
  return res.data;
};
export const fetchPostSupport = async (values: TSupportChange): Promise<SRO<TSupportChange>> => {
  const res = await api.post('/supports', values);
  return res.data;
};
export const fetchEditSupport = async (values: TSupportChange): Promise<SRO<TSupportChange>> => {
  const res = await api.put(`/admin/supports/${values.id}`, values);
  return res.data;
};
export const fetchDeleteSupport = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/supports/${id}`);
  return res.data;
};
