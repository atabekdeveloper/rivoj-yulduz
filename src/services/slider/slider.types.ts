import { TServiceItem } from '../service/service.types';

export type TSliderItem = {
  id: number;
  title: string;
  description: string;
  image: {
    id: number;
    image_url: string;
  };
  service: TServiceItem;
};
export type TSliderChange = {
  id?: number;
  title: string;
  description: string;
  images: string[];
  service_id: number;
};
