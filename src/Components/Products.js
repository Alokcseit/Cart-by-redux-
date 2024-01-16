import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../Store/CartSlice";

import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function Products() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(products);
  function addtoCart(product) {
    dispatch(addtocart(product));
  }
  const card = products.map((product, index) => (
    <Card
      key={product.id}
      style={{
        width: "17rem",
        height: "500px",
        margin: "10px",
      }}
    >
      <img
        alt="Sample"
        src={product.images}
        style={{ width: "100%", height: "300px" }}
      />
      <CardBody>
        <CardTitle tag="h5">{product.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          ₹{product.price}
        </CardSubtitle>
        <CardText></CardText>
        <Button onClick={() => addtoCart(product)}>add to cart</Button>
      </CardBody>
    </Card>
  ));
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{card}</div>
    </>
  );
}

export default Products;
