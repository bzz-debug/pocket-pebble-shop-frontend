export const totalBasketPrice = (basket) => {
  const map = basket.map((item) => {
    return item.price * item.quantity;
  });
  const sum = map.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum;
};
