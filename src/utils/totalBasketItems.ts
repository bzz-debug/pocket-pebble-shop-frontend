export const totalBasketItems = (basket) => {
  let count = 0;
  basket.forEach(() => {
    count++;
  });
  return count;
};
