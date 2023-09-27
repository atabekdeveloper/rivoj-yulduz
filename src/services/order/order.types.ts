import { TGetParamItem } from '../index.types';

export type TOrderItem = {
  id: number;
  status_name: string;
  payment: TGetParamItem;
  contact: TOrderContact;
  comment: string;
  total_amount: number;
  paid: false;
  quantity: number;
  width: number;
  height: number;
};
export type TOrderContact = {
  id: number;
  name: string;
  phone: string;
  comment: string;
};
export type TOrderChange = {
  id: number;
  title: string;
  description: string;
  type_id: number;
};
export type TPostOrderChange = {
  service_slug: string;
  quantity: number;
  payment_id: number;
  width: number;
  height: number;
  name: string;
  phone: string;
  comment: string;
};
export type TPortGetItem = {
  payment_url: string;
};
