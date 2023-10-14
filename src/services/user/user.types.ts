export type TUserItem = {
  id: number;
  name: string;
  phone: string;
  role_id: number;
  role_name: string;
};
export type TUserChange = {
  name: string;
  phone: string;
  password: string;
  role_id: number;
  id?: number;
};
