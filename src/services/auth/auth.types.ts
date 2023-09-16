import { TProfileItem } from '../profile/profile.types';

export type TAuthLogin = {
  phone: string;
  password: string;
};
export type TAuthLoginGet = {
  user: TProfileItem;
  token: string;
};
