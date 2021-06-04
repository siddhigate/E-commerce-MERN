import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart);
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div>
        <h2>Your cart</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            addToCart={false}
            removeFromCart={true}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div>
        {products ? (
          products.length > 0 ? (
            <div>
              <h2 className="mb-5">Checkout details</h2>
              <h3> Total amount: {getAmount(products)}</h3>

              <button className="btn btn-success btn-block">Buy</button>
            </div>
          ) : (
            <h3></h3>
          )
        ) : (
          <h3></h3>
        )}
      </div>
    );
  };

  const getAmount = (products) => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });

    return amount;
  };

  return (
    <Base title="CartPage" description="Ready to checkout">
      <div className="row">
        <div className="col-6">
          {products ? (
            products.length > 0 ? (
              loadAllProducts(products)
            ) : (
              <h3>Empty cart</h3>
            )
          ) : (
            <h3>Empty cart</h3>
          )}
        </div>
        <div className="col-6">{loadCheckout()}</div>
      </div>
    </Base>
  );
};

export default Cart;
