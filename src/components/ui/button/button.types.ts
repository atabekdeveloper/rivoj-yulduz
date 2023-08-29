export type TUiButton = {
  onClick?: () => void;
  type: 'primary' | 'default';
  text: string;
  color: 'blue' | 'pink';
  icon?: boolean;
};
