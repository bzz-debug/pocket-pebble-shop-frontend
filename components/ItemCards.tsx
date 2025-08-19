import { Link } from "react-router-dom";

function ItemCards({ item }) {
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
        </div>
      </Link>
    </>
  );
}

export default ItemCards;
