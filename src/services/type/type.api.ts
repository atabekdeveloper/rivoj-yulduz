/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteType,
  fetchEditType,
  fetchGetTypes,
  fetchGetUserTypeItem,
  fetchGetUserTypes,
  fetchPostType,
} from './type.services';

const useGetTypesQuery = () =>
  useQuery({
    queryFn: () => fetchGetTypes(),
    queryKey: ['type'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useGetUserTypesQuery = () =>
  useQuery({
    queryFn: () => fetchGetUserTypes(),
    queryKey: ['type'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useGetUserTypeItemQuery = (slug: string) =>
  useQuery({
    queryFn: () => fetchGetUserTypeItem(slug),
    queryKey: ['type', slug],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostTypeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostType,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['type'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditTypeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditType,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['type'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteTypeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteType,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['type'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteTypeMutation,
  useEditTypeMutation,
  useGetTypesQuery,
  useGetUserTypeItemQuery,
  useGetUserTypesQuery,
  usePostTypeMutation,
};
