import { api } from 'src/api';
import { SR } from 'src/services/index.types';

import { TStatusItem } from './status.types';

export const fetchGetStatuses = async (): Promise<SR<TStatusItem>> => {
  const res = await api.get('/admin/statuses');
  return res.data;
};
