import { useContext, useState } from "react";
import { ItemContext, BasketContext } from "../src/Contexts";
import ItemCards from "./ItemCards";

function Basket() {
  //need to add localStorage / sessionStorage to remember what is in the basket

  const { basket, setBasket } = useContext(BasketContext);

  return (
    <>
      <div>
        {basket.map((basketItem) => {
          return;
        })}
      </div>{" "}
      //
      {/* <form action="http://localhost:8080/pay" method="post">
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
      </form> */}
    </>
  );
}

export default Basket;
