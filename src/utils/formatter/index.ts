export const lowerCase = (text: string) => text.toLowerCase();
export const formMessage = (text: string) => `Пожалуйста, заполните поле ${lowerCase(text)}!`;
export const formatStringJoin = (value: string) => value.split(' ').join('');
export const formatNum = <T>(value: T) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export const formatPrice = <T>(number: T & number, type: string) => {
  if (number) {
    return `${number.toLocaleString('en-AU')} ${type}`;
  }
  return `0 ${type}`;
};
export const formatPrice2 = <T>(number: T & number, type: string) => {
  if (number) {
    return `${number.toLocaleString('cs-CZ')} ${type}`;
  }
  return `0 ${type}`;
};
