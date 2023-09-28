import { message } from 'antd';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostSupport } from './support.services';

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

export { usePostSupportMutation };
