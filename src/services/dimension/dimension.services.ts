import { api } from 'src/api';
import { SR } from 'src/services/index.types';

import { TDimensionItem } from './dimension.types';

export const fetchGetDimensions = async (): Promise<SR<TDimensionItem>> => {
  const res = await api.get('/admin/dimensions');
  return res.data;
};
