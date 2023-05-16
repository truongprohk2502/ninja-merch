import { Component } from "solid-js";
import Card from "../components/Card";

const Cart: Component = () => {
  return (
    <div class="max-w-md my-8 mx-auto">
      <Card rounded={true}>
        <h2>Your Shopping Cart</h2>
      </Card>
    </div>
  );
};

export default Cart;
