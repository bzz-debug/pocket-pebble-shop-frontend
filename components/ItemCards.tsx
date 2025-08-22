import { Link } from "react-router-dom";
import { useContext } from "react";
import { ItemContext, BasketContext } from "../src/Contexts";

function ItemCards({ item }) {
  const { basket, setBasket } = useContext(BasketContext);
  // const { basketItem, setBasketItem } = useContext(ItemContext);

  return (
    <>
      <Link to={`/items/${item.item_id}`}>
        <div className="item-card">
          <p>{item.name}</p>
          <img
            className="item-cards-images"
            src={`http://localhost:8080/images/${item.img_url}`}
          />
          <p>£{item.price}</p>
          <button
            onClick={() => {
              setBasket([...basket, { item: item.name, price: item.price }]);
            }}
          ></button>
        </div>
      </Link>
    </>
  );
}

export default ItemCards;
