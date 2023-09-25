/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeletePortfolio,
  fetchEditPortfolio,
  fetchGetPortfolios,
  fetchGetUserPortfolios,
  fetchPostPortfolio,
} from './portfolio.services';

const useGetPortfoliosQuery = () =>
  useQuery({
    queryFn: () => fetchGetPortfolios(),
    queryKey: ['portfolio'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useGetUserPortfoliosQuery = () =>
  useQuery({
    queryFn: () => fetchGetUserPortfolios(),
    queryKey: ['portfolio'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostPortfolioMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostPortfolio,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['portfolio'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditPortfolioMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditPortfolio,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['portfolio'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeletePortfolioMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeletePortfolio,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['portfolio'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeletePortfolioMutation,
  useEditPortfolioMutation,
  useGetPortfoliosQuery,
  useGetUserPortfoliosQuery,
  usePostPortfolioMutation,
};
