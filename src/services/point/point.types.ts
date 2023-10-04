export type TPointItem = {
  id: number;
  point_type: TPointTypeItem;
  title: string;
  lat: number;
  lng: number;
};
export type TPointTypeItem = {
  id: number;
  slug: string;
  name: string;
};
export type TPointChange = {
  id?: number;
  title: string;
  lat: number;
  lng: number;
  point_type_id: number;
};
