import { TServiceItem } from '../service/service.types';

export type TTypeItem = {
  id: number;
  title: string;
  slug: string;
  icon: string;
  categories: TTypeCategoryItem[];
};
export type TTypeChange = {
  id?: number;
  title: string;
  icon: string;
};
export type TTypeCategoryItem = {
  title: string;
  slug: string;
  description: string;
  type_id: number;
  services: TServiceItem[];
};
