/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { useActions } from 'src/hooks';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteSlider,
  fetchEditSlider,
  fetchGetSliders,
  fetchGetUserSliders,
  fetchPostSlider,
} from './slider.services';

const useGetSlidersQuery = () => {
  const { logOut } = useActions();
  return useQuery({
    queryFn: () => fetchGetSliders(),
    queryKey: ['slider'],
    onError: (err: Error) => {
      message.error(err.message);
      logOut();
    },
  });
};

const useGetUserSlidersQuery = () =>
  useQuery({
    queryFn: fetchGetUserSliders,
    queryKey: ['slider'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostSliderMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostSlider,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['slider'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditSliderMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditSlider,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['slider'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteSliderMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteSlider,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['slider'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteSliderMutation,
  useEditSliderMutation,
  useGetSlidersQuery,
  useGetUserSlidersQuery,
  usePostSliderMutation,
};
