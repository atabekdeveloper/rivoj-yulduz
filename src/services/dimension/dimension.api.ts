/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetDimensions } from './dimension.services';

const useGetDimensionsQuery = () =>
  useQuery({
    queryFn: () => fetchGetDimensions(),
    queryKey: ['dimension'],
    onError: (err: Error) => message.error(err.message),
  });

export { useGetDimensionsQuery };
