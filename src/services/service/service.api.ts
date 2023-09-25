/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { useActions } from 'src/hooks';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteService,
  fetchEditService,
  fetchGetServices,
  fetchGetUserServiceItem,
  fetchPostService,
} from './service.services';

const useGetServicesQuery = () => {
  const { logOut } = useActions();
  return useQuery({
    queryFn: () => fetchGetServices(),
    queryKey: ['service'],
    onError: (err: Error) => {
      message.error(err.message);
      logOut();
    },
  });
};

const useGetUserServiceItemQuery = (slug: string) =>
  useQuery({
    queryFn: () => fetchGetUserServiceItem(slug),
    queryKey: ['service', slug],
    enabled: slug !== '1',
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostServiceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostService,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['service'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditServiceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditService,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['service'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteServiceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteService,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['service'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteServiceMutation,
  useEditServiceMutation,
  useGetServicesQuery,
  useGetUserServiceItemQuery,
  usePostServiceMutation,
};
