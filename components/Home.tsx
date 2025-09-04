import { Link } from "react-router-dom";
import { BasketContext, ItemContext } from "../src/Contexts";
import { useContext } from "react";

function Home() {
  const { basket } = useContext(BasketContext);
  console.log(basket);

  return (
    <>
      <header>
        <div></div>
      </header>
      <h1>Welcome to Pocket Pebbles</h1>
      <br></br>
      <Link to="/item_list">
        {/*remember to add routing in the App, or Main, or whatever*/}
        <button>Click Here to enter the shop......</button>
      </Link>
    </>
  );
}

export default Home;
