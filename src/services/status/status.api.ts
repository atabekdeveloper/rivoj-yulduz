/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetStatuses } from './status.services';

const useGetStatusesQuery = () =>
  useQuery({
    queryFn: () => fetchGetStatuses(),
    queryKey: ['status'],
    onError: (err: Error) => message.error(err.message),
  });

export { useGetStatusesQuery };
