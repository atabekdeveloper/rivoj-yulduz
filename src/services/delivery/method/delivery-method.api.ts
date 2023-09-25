/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteDeliveryMethod,
  fetchEditDeliveryMethod,
  fetchGetDeliveryMethods,
  fetchPostDeliveryMethod,
} from './delivery-method.services';

const useGetDeliveryMethodsQuery = () =>
  useQuery({
    queryFn: () => fetchGetDeliveryMethods(),
    queryKey: ['delivery-method'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostDeliveryMethodMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostDeliveryMethod,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['delivery-method'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditDeliveryMethodMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditDeliveryMethod,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['delivery-method'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteDeliveryMethodMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteDeliveryMethod,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['delivery-method'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteDeliveryMethodMutation,
  useEditDeliveryMethodMutation,
  useGetDeliveryMethodsQuery,
  usePostDeliveryMethodMutation,
};
