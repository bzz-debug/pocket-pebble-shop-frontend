import { Link } from "react-router-dom";

function OrderConfirmation() {
  //extract order id from the backend
  return (
    <>
      <h1>Thank you for your purchase!</h1>
      <Link to={"/"}>
        <button>Take me back to the shop</button>
      </Link>
      <img src="" alt="img icons that were purchased" />
    </>
  );
}

export default OrderConfirmation;
