export type TCategoryItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  type_id: number;
};
export type TCategoryChange = {
  id?: number;
  title: string;
  description: string;
  type_id: number;
};
