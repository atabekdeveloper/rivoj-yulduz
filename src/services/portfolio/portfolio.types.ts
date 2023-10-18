export type TPortfolioItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
};
export type TPortfolioChange = {
  id?: number;
  title: string;
  description: string;
  image: string | null;
};
