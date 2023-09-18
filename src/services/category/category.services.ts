import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TCategoryChange, TCategoryItem } from './category.types';

export const fetchGetCategories = async (): Promise<SR<TCategoryItem>> => {
  const res = await api.get('/admin/categories');
  return res.data;
};
export const fetchPostCategory = async (values: TCategoryChange): Promise<SRO<TCategoryItem>> => {
  const res = await api.post('/admin/categories', values);
  return res.data;
};
export const fetchEditCategory = async (values: TCategoryChange): Promise<SRO<TCategoryItem>> => {
  const res = await api.post(`/admin/categories/${values.id}`, values);
  return res.data;
};
export const fetchDeleteCategory = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/categories/${id}`);
  return res.data;
};
