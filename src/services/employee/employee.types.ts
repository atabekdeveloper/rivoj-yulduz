export type TEmployeeItem = {
  id: number;
  name: string;
  slug: string;
  position: string;
  phone: string;
  image: {
    id: number;
    image_url: string;
  };
};
export type TEmployeeChange = {
  id?: number;
  name: string;
  position: string;
  phone: string;
  image: string;
};
