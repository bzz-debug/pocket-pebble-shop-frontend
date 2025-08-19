import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemsById } from "../api";

function IndividualItem() {
  const [item, setItem] = useState();

  const handleAddToBasket = () => {
    //complete functionality here
  };

  const { item_id } = useParams();
  useEffect(() => {
    getItemsById(item_id).then((result) => {
      console.log(result.data.item);
      setItem(result.data.item);
    });
  }, [item_id]);

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
            <form action="">
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
