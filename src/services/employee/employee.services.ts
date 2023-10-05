import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TEmployeeChange, TEmployeeItem } from './employee.types';

export const fetchGetEmployees = async (): Promise<SR<TEmployeeItem>> => {
  const res = await api.get('/admin/employees');
  return res.data;
};
export const fetchGetUserEmployees = async (): Promise<SR<TEmployeeItem>> => {
  const res = await api.get('/employees');
  return res.data;
};
export const fetchPostEmployee = async (values: TEmployeeChange): Promise<TMessage> => {
  const res = await api.post('/admin/employees', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
export const fetchEditEmployee = async (values: TEmployeeChange): Promise<SRO<TEmployeeItem>> => {
  const res = await api.post(
    `/admin/employees/${values.id}`,
    { ...values, _method: 'PUT' },
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );
  return res.data;
};
export const fetchDeleteEmployee = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/employees/${id}`);
  return res.data;
};
