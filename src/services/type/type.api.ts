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
    onError: (err: Error) => message.error(err.message),
  });

const useGetUserTypesQuery = () =>
  useQuery({
    queryFn: () => fetchGetUserTypes(),
    queryKey: ['type'],
    onError: (err: Error) => message.error(err.message),
  });

const useGetUserTypeItemQuery = (slug: string) =>
  useQuery({
    queryFn: () => fetchGetUserTypeItem(slug),
    queryKey: ['type', slug],
    onError: (err: Error) => message.error(err.message),
  });

const usePostTypeMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostType,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['type'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
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
    onError: (err: Error) => message.error(err.message),
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
    onError: (err: Error) => message.error(err.message),
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
