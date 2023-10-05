/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeletePoint,
  fetchEditPoint,
  fetchGetPoints,
  fetchGetPointTypes,
  fetchGetUserPoints,
  fetchPostPoint,
} from './point.services';

const useGetPointsQuery = () =>
  useQuery({
    queryFn: fetchGetPoints,
    queryKey: ['point'],
    onError: (err: any) => message.error(err.response.data.message),
  });
const useGetUserPointsQuery = () =>
  useQuery({
    queryFn: fetchGetUserPoints,
    queryKey: ['point-user'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useGetPointTypesQuery = () =>
  useQuery({
    queryFn: fetchGetPointTypes,
    queryKey: ['point-type'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostPointMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostPoint,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['point'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};
const useEditPointMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditPoint,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['point'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeletePointMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeletePoint,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['point'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeletePointMutation,
  useEditPointMutation,
  useGetPointsQuery,
  useGetPointTypesQuery,
  useGetUserPointsQuery,
  usePostPointMutation,
};
