import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TSliderChange, TSliderItem } from './slider.types';

export const fetchGetSliders = async (): Promise<SR<TSliderItem>> => {
  const res = await api.get('/admin/sliders');
  return res.data;
};
export const fetchGetUserSliders = async (): Promise<SR<TSliderItem>> => {
  const res = await api.get('/sliders');
  return res.data;
};
export const fetchPostSlider = async (values: TSliderChange): Promise<TMessage> => {
  const res = await api.post('/admin/sliders', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
export const fetchEditSlider = async (values: TSliderChange): Promise<SRO<TSliderItem>> => {
  const res = await api.post(
    `/admin/sliders/${values.id}`,
    { ...values, _method: 'PUT' },
    { headers: { 'Content-Type': 'multipart/form-data' } },
  );
  return res.data;
};
export const fetchDeleteSlider = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/sliders/${id}`);
  return res.data;
};
