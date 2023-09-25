/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchDeleteCategory,
  fetchEditCategory,
  fetchGetCategories,
  fetchPostCategory,
} from './category.services';

const useGetCategoriesQuery = () =>
  useQuery({
    queryFn: () => fetchGetCategories(),
    queryKey: ['category'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const usePostCategoryMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchPostCategory,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['category'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditCategoryMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditCategory,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['category'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteCategoryMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteCategory,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['category'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetCategoriesQuery,
  usePostCategoryMutation,
};
