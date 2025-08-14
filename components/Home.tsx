import { Link } from "react-router-dom";

function Home() {
  return (
    <>
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
