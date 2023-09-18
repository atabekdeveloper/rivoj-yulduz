import { api } from 'src/api';
import { SR } from 'src/services/index.types';

import { TFormatItem } from './format.types';

export const fetchGetFormats = async (): Promise<SR<TFormatItem>> => {
  const res = await api.get('/admin/formats');
  return res.data;
};
