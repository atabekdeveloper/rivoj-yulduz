import { TCategoryItem } from '../category/category.types';
import { TDimensionItem } from '../dimension/dimension.types';
import { TFormatItem } from '../format/format.types';

export type TServiceItem = {
  id: number;
  title: string;
  description: string;
  slug: string;
  category: TCategoryItem;
  dimension: TDimensionItem;
  each: number;
  price: number;
  price_each: number;
  is_public: boolean;
  images: {
    id: number;
    image_url: string;
  }[];
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
  images: string[];
  formats: TFormatItem[];
};
