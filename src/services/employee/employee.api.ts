/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteEmployee,
  fetchEditEmployee,
  fetchGetEmployees,
  fetchGetUserEmployees,
  fetchPostEmployee,
} from './employee.services';

const useGetEmployeesQuery = () =>
  useQuery({
    queryFn: () => fetchGetEmployees(),
    queryKey: ['employee'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useGetUserEmployeesQuery = () =>
  useQuery({
    queryFn: () => fetchGetUserEmployees(),
    queryKey: ['employee'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostEmployeeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostEmployee,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['employee'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditEmployeeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditEmployee,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['employee'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteEmployeeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteEmployee,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['employee'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteEmployeeMutation,
  useEditEmployeeMutation,
  useGetEmployeesQuery,
  useGetUserEmployeesQuery,
  usePostEmployeeMutation,
};
