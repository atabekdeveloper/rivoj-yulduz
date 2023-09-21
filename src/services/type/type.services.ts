import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TTypeChange, TTypeItem } from './type.types';

export const fetchGetTypes = async (): Promise<SR<TTypeItem>> => {
  const res = await api.get('/admin/types');
  return res.data;
};

export const fetchGetUserTypes = async (): Promise<SR<TTypeItem>> => {
  const res = await api.get('/types');
  return res.data;
};
export const fetchGetUserTypeItem = async (slug: string): Promise<SRO<TTypeItem>> => {
  const res = await api.get(`/types/${slug}`);
  return res.data;
};
export const fetchPostType = async (values: TTypeChange): Promise<SRO<TTypeItem>> => {
  const res = await api.post('/admin/types', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
export const fetchEditType = async (values: TTypeChange): Promise<SRO<TTypeItem>> => {
  const res = await api.post(
    `/admin/types/${values.id}`,
    { ...values, _method: 'PUT' },
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );
  return res.data;
};
export const fetchDeleteType = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/types/${id}`);
  return res.data;
};
