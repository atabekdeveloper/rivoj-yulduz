export type TCategoryItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  type_id: number;
  type: { slug: string };
};
export type TCategoryChange = {
  id?: number;
  title: string;
  description: string;
  type_id: number;
};
