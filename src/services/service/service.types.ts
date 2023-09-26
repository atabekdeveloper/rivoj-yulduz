import { TFormatItem } from '../format/format.types';

export type TServiceItem = {
  id: number;
  title: string;
  slug: string;
  category_id: number;
  category_title: string;
  dimension_id: number;
  dimension_name: string;
  dimension_unit: string;
  each: number;
  price: number;
  price_each: number;
  is_public: boolean;
  image: string;
  formats: TFormatItem[];
};
export type TServiceChange = {
  id?: number;
  title: string;
  description: string;
  category_id: number;
  dimension_id: number;
  price: number;
  each: number;
  image: string;
  formats: TFormatItem[];
};
