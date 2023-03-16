import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/cartRedux";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const dispatch = useDispatch();


  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser.uid,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
          city: data.billing_details.address.city,
        });
        setOrderId(res.data._id);
        dispatch(emptyCart());
      } catch { }
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button onClick={() => navigate("/")} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div >
  );
};

export default Success;
