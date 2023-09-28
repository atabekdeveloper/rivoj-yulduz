/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParams } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteSupport,
  fetchEditSupport,
  fetchGetSupports,
  fetchPostSupport,
} from './support.services';

const useGetSupportsQuery = (values: TGetParams) =>
  useQuery({
    queryFn: () => fetchGetSupports(values),
    queryKey: ['support', values.page, values.status_id, values.phone],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostSupportMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostSupport,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['support'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};
const useEditSupportMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditSupport,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['support'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteSupportMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteSupport,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['support'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteSupportMutation,
  useEditSupportMutation,
  useGetSupportsQuery,
  usePostSupportMutation,
};
