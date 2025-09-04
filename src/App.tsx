import { useEffect, useState } from "react";
import "./App.css";
import Home from "../components/Home";
import ItemList from "../components/ItemList";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import IndividualItem from "../components/IndividualItem";
import OrderConfirmation from "../components/OrderConfirmation";
import Basket from "../components/Basket";
import { Route, Routes, Link } from "react-router-dom";
import { BasketContext, ItemContext } from "./Contexts";
import { getItem, setItem } from "./utils/localStorage";

interface BasketItem {
  item_id: number;
  name: string;
  price: number;
  quantity: number;
}

function App() {
  // const [basketItem, setBasketItem] = useState({
  //   item: "",
  //   price: "",
  // });
  const [basket, setBasket] = useState<BasketItem[]>(() => {
    const storedBasket = getItem("basket");
    return storedBasket || [];
  });
  const [basketItem, setBasketItem] = useState<BasketItem | null>(null);

  useEffect(() => {
    setItem("basket", basket);
  }, [basket]);

  // need to figure out how to include two properties, ie item and price ....
  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <ItemContext.Provider value={{ basketItem, setBasketItem }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/item_list" element={<ItemList />}></Route>
            <Route path="/items/:item_id" element={<IndividualItem />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/basket" element={<Basket />}></Route>
            <Route
              path="/order-confirmation/"
              element={<OrderConfirmation />}
            ></Route>
          </Routes>
        </ItemContext.Provider>
      </BasketContext.Provider>

      {/* <div>
        <p>basket:</p>
        {basket.map((eachItem) => {
          return <p>{eachItem.item_id}</p>;
        })}
      </div> */}
    </>
  );
}

export default App;
