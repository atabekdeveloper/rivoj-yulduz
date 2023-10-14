/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParams } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteOrder,
  fetchDeleteOrderAttach,
  fetchEditOrder,
  fetchGetOrderItem,
  fetchGetOrders,
  fetchPostOrder,
  fetchPostOrderAttach,
} from './order.services';

const useGetOrdersQuery = (values: TGetParams) =>
  useQuery({
    queryFn: () => fetchGetOrders(values),
    queryKey: ['order', values.page, values.status_id, values.phone],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useGetOrderItemQuery = (id: number) =>
  useQuery({
    queryFn: () => fetchGetOrderItem(id),
    queryKey: ['order-item', id],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostOrderMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostOrder,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['order'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const usePostOrderAttachMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostOrderAttach,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['order-item'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};
const useEditOrderMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditOrder,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['order'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteOrderMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteOrder,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['order'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteOrderAttachMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteOrderAttach,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['order-item'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteOrderAttachMutation,
  useDeleteOrderMutation,
  useEditOrderMutation,
  useGetOrderItemQuery,
  useGetOrdersQuery,
  usePostOrderAttachMutation,
  usePostOrderMutation,
};
