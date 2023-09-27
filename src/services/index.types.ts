export type TMessage = {
  message: string;
  data: string;
};
export interface SR<T> {
  data: T[];
  message: string;
  status: boolean;
  total?: number;
}
export interface SRO<T> {
  data: T;
  message: string;
  status: boolean;
}
export type TGetParamItem = {
  id: number;
  name: string;
};
export type TGetParams = {
  limit: number;
  page: number;
  status_id?: number;
  phone?: string;
};
