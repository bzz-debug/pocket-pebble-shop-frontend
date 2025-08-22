import { useState } from "react";
import "./App.css";
import Home from "../components/Home";
import ItemList from "../components/ItemList";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import IndividualItem from "../components/IndividualItem";
import Basket from "../components/Basket";
import { Route, Routes, Link } from "react-router-dom";
import { BasketContext, ItemContext } from "./Contexts";

function App() {
  const [count, setCount] = useState(0);
  const [basketItem, setBasketItem] = useState(null);

  // const [basketItem, setBasketItem] = useState({
  //   item: "",
  //   price: "",
  // });
  const [basket, setBasket] = useState([
    {
      item: "",
      price: "",
    },
  ]);

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
          </Routes>
        </ItemContext.Provider>
      </BasketContext.Provider>
    </>
  );
}

export default App;
