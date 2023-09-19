export const lowerCase = (text: string) => text.toLowerCase();
export const formMessage = (text: string) => `Пожалуйста, заполните поле ${lowerCase(text)}!`;
export const formatStringJoin = (value: string) => value.split(' ').join('');
export const formatNum = <T>(value: T) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
