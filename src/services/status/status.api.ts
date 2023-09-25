/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useQuery } from '@tanstack/react-query';

import { fetchGetStatuses } from './status.services';

const useGetStatusesQuery = () =>
  useQuery({
    queryFn: () => fetchGetStatuses(),
    queryKey: ['status'],
    onError: (err: any) => message.error(err.response.data.message),
  });

export { useGetStatusesQuery };
