export const convertCurrency = (number) => {
  return number.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
};
export const replacePrice = (number) => {
  return number.replaceAll(/[.,]/g, '');
};
