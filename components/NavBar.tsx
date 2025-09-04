import { Link } from "react-router-dom";
import { totalBasketPrice } from "../src/utils/totalBasketPrice";
import { useContext, useState } from "react";
import { ItemContext, BasketContext } from "../src/Contexts";

function NavBar() {
  const { basket, setBasket } = useContext(BasketContext);

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/item_list">shop</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/reviews">reviews</Link>
          </li>
          <li>
            <Link to="/basket">basket: £{totalBasketPrice(basket)}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;
