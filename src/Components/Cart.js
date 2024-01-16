import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { removetocart } from "../Store/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const productscart = useSelector((state) => state.cart);
  console.log(productscart);
  const removecart = (id) => {
    dispatch(removetocart(id));
  };
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productscart.map((item) => (
          <Card
            key={item.id}
            style={{
              width: "17rem",
              height: "500px",
              margin: "10px",
            }}
          >
            <img
              alt="Sample"
              src={item.images}
              style={{ width: "100%", height: "300px" }}
            />
            <CardBody>
              <CardTitle tag="h5">{item.title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                ₹{item.price}
              </CardSubtitle>
            </CardBody>
            <button onClick={() => removecart(item.id)}>Remove to cart</button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Cart;
