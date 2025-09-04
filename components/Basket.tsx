import { useContext, useState } from "react";
import { ItemContext, BasketContext } from "../src/Contexts";
import ItemCards from "./ItemCards";
import BasketItem from "./BasketItem";
import { handlePaypalCheckout } from "../api";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { totalBasketPrice } from "../src/utils/totalBasketPrice";

function Basket() {
  //need to add localStorage / sessionStorage to remember what is in the basket

  const { basket, setBasket } = useContext(BasketContext);

  interface BasketItem {
    item_id: number;
    name: string;
    price: number;
    quantity: number;
  }

  const arr: Array<BasketItem> = basket;

  const basketTotal = totalBasketPrice(basket);
  console.log("arr>>>>", arr, "basket>>>>", basket);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div>
        {arr.map((basketItem) => {
          return <BasketItem key={basketItem.item_id} item={basketItem} />;
        })}
        <p>Total Price: £{basketTotal}</p>
      </div>{" "}
      Put Pay button here and link total basket price + delivery
      <form action="http://localhost:8080/pay" method="POST">
        <input type="hidden" name="totalPrice" value={basketTotal} />
        <button type="submit">Checkout - £{basketTotal}</button>
      </form>
      {/* <button
        onClick={() => {
          console.log(basketTotal);
          handlePaypalCheckout(basketTotal)
            .then((response) => {
              console.log("Payment successful:", response.data);
            })
            .catch((error) => {
              console.error("Payment failed:", error);
              console.error("Error details:", error.response?.data);
              // alert("Payment failed. Please try again.");
            });
        }}
      >
        Checkout
      </button> */}
    </>
  );
}
/* <form action="http://localhost:8080/pay" method="post">
        <select name="quantity" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          name=""
          id=""
          placeholder="Tell us about any colour preferences you may have..."
        ></textarea>
        <button onClick={handleAddToBasket}>Add to Basket</button>
      </form> */
export default Basket;
