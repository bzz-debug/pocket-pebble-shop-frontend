import { useState } from "react";
import "./App.css";
import Home from "../components/Home";
import ItemList from "../components/ItemList";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import IndividualItem from "../components/IndividualItem";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/item_list" element={<ItemList />}></Route>
        <Route path="/items/:item_id" element={<IndividualItem />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
      </Routes>
    </>
  );
}

export default App;
