import { message } from 'antd';
import { useActions } from 'src/hooks';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchDeleteService, fetchGetServices, fetchPostService } from './service.services';

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

const usePostServiceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostService,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['service'] });
      message.success(res.message);
    },
    onError: (err: Error) => message.error(err.message),
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
    onError: (err: Error) => message.error(err.message),
  });
};

export { useDeleteServiceMutation, useGetServicesQuery, usePostServiceMutation };
