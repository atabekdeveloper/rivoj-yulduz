/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetFormats } from './format.services';

const useGetFormatsQuery = () =>
  useQuery({
    queryFn: () => fetchGetFormats(),
    queryKey: ['format'],
    onError: (err: Error) => message.error(err.message),
  });

export { useGetFormatsQuery };
