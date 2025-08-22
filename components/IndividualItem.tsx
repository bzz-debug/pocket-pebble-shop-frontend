import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemsById } from "../api";
import { useContext } from "react";
import { ItemContext, BasketContext } from "../src/Contexts";

function IndividualItem() {
  const [item, setItem] = useState();
  const { basket, setBasket } = useContext(BasketContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToBasket = (e) => {
    //complete functionality here - I need to somehow call the payment function with the value of the basket............... - but not here, on a separate checkout page..................
    e.preventDefault();
    const basketItem = {
      item_id: item.item_id,
      name: item.name,
      price: item.price,
      quantity: parseInt(quantity),
    };

    setBasket([...basket, basketItem]);
  };

  const { item_id } = useParams();
  useEffect(() => {
    getItemsById(item_id).then((result) => {
      console.log(result.data.item);
      setItem(result.data.item);
    });
  }, [item_id]);
  console.log(basket);
  return (
    <>
      <h1>Individual Item {item_id}</h1>
      {item ? (
        <div>
          <div>
            <p>{item.name}</p>
            <img
              className="individual-item-image"
              src={`http://localhost:8080/images/${item.img_url}`}
            />
          </div>
          <div>
            <p className="description">
              need to add in some logic here which enables me to tailor the
              description to the item. Do this in the backend, by having a
              description added into each db entry. I could have an edit feature
              for a logged in vendor account which creates a PATCH request to
              update the description in the backend.
            </p>
          </div>
          <div>
            <form onSubmit={handleAddToBasket} method="post">
              <select
                name="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
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
              <button type="submit">Add to Basket</button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
export default IndividualItem;

//could have a dropdown with the amount of items wanted

//need to get the props in here somehow

// need to implement environment variables to flip between the locally held image source, and the hosted version, once we go live.
