import { TGetParamItem } from '../index.types';
import { TServiceItem } from '../service/service.types';
import { TUserItem } from '../user/user.types';

export type TOrderItem = {
  id: number;
  status_name: string;
  payment: TGetParamItem;
  contact: TOrderContact;
  service: TServiceItem;
  user: TUserItem;
  comment: string;
  total_amount: number;
  paid: boolean;
  prepaid_expense: boolean;
  quantity: number;
  width: number;
  height: number;
};
export type TOrderContact = {
  id: number;
  name: string;
  phone: string;
  comment: string;
  title: string;
  address: string;
};
export type TOrderChange = {
  id: number;
  status_id?: number;
  prepaid_expense?: boolean;
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
export type TOrderAttachChange = {
  orderId: number;
  userId: number;
};
export type TOrderContactChange = {
  id: number;
  title: string;
  address: string;
};
