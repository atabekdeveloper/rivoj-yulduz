import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TUserChange, TUserItem } from './user.types';

export const fetchGetUsers = async (): Promise<SR<TUserItem>> => {
  const res = await api.get('/admin/users');
  return res.data;
};
export const fetchPostUser = async (values: TUserChange): Promise<SRO<TUserItem>> => {
  const res = await api.post('/admin/users', values);
  return res.data;
};
export const fetchEditUser = async (values: TUserChange): Promise<SRO<TUserItem>> => {
  const res = await api.post(`/admin/users/${values.id}`, values);
  return res.data;
};
export const fetchDeleteUser = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/users/${id}`);
  return res.data;
};
