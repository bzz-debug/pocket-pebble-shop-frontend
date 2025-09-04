import { useContext, useState } from "react";
import { ItemContext, BasketContext } from "../src/Contexts";

function BasketItem({ item }) {
  const { basket, setBasket } = useContext(BasketContext);

  const handleRemove = (name) => {
    // setBasketItem(null)
    const removeItem = basket.findIndex((item) => {
      return item.name === name;
    });
    console.log(removeItem, name);
    if (removeItem !== -1) {
      basket.splice(removeItem, 1);
    }
    setBasket([...basket]);
    //try something else.
  };

  return (
    <>
      <span>
        {item.name} £{item.price}
      </span>
      <button
        onClick={() => {
          handleRemove(item.name);
        }}
      >
        remove item
      </button>
    </>
  );
}
export default BasketItem;
