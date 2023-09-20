export type TOrderItem = {
  id: number;
  status_id: number;
  status_name: string;
  delivery_method_id: number;
  delivery_method_title: string;
  delivery_method_price: number;
  model_type: string;
  model_id: number;
  phone: string;
  comment: null;
  total_amount: number;
  paid: boolean;
};
export type TOrderChange = {
  id: number;
  title: string;
  description: string;
  type_id: number;
};
