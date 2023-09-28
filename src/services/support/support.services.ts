import { api } from 'src/api';
import { SRO } from 'src/services/index.types';

import { TSupportChange } from './support.types';

export const fetchPostSupport = async (values: TSupportChange): Promise<SRO<TSupportChange>> => {
  const res = await api.post('/supports', values);
  return res.data;
};
