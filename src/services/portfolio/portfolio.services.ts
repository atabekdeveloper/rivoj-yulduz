import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TPortfolioChange, TPortfolioItem } from './portfolio.types';

export const fetchGetPortfolios = async (): Promise<SR<TPortfolioItem>> => {
  const res = await api.get('/admin/portfolios');
  return res.data;
};
export const fetchGetUserPortfolios = async (limit?: number): Promise<SR<TPortfolioItem>> => {
  const res = await api.get(`/portfolios?${limit ? `limit=${limit}` : ''}`);
  return res.data;
};
export const fetchPostPortfolio = async (values: TPortfolioChange): Promise<TMessage> => {
  const res = await api.post('/admin/portfolios', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
export const fetchEditPortfolio = async (
  values: TPortfolioChange,
): Promise<SRO<TPortfolioItem>> => {
  const res = await api.post(
    `/admin/portfolios/${values.id}`,
    { ...values, _method: 'PUT' },
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );
  return res.data;
};
export const fetchDeletePortfolio = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/portfolios/${id}`);
  return res.data;
};
