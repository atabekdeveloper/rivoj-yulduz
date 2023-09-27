/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParams } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchDeleteOrder, fetchEditOrder, fetchGetOrders, fetchPostOrder } from './order.services';

const useGetOrdersQuery = (values: TGetParams) =>
  useQuery({
    queryFn: () => fetchGetOrders(values),
    queryKey: ['order', values.page, values.status_id],
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

export { useDeleteOrderMutation, useEditOrderMutation, useGetOrdersQuery, usePostOrderMutation };
