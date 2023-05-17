import { Component, Show, createResource } from "solid-js";
import { useParams } from "@solidjs/router";
import { useCartContext } from "../contexts/CartContext";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  img: string;
}

const fetchProduct = async (id: string) => {
  const res = await fetch("http://localhost:4000/products/" + id);
  return res.json();
};

const Product: Component = () => {
  const params = useParams();
  const [product] = createResource<IProduct, string>(params.id, fetchProduct);
  const { items, setItems } = useCartContext();

  const addProduct = () => {
    if (!product()) return;

    const exists = items.find((p) => p.id === product()?.id);

    if (exists) {
      setItems(
        (p) => p.id === exists.id,
        "quantity",
        (q) => q + 1
      );
    } else {
      setItems([
        ...items,
        {
          id: product().id,
          title: product().title,
          price: product().price,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading product...</p>}>
        <div class="grid grid-cols-5 gap-7">
          <div class="col-span-2">
            <img src={product().img} alt="product image" />
          </div>

          <div class="col-span-3">
            <h2 class="text-3xl font-bold mb-7">{product().title}</h2>
            <p>{product().description}</p>
            <p class="my-7 text-2xl">Only £{product().price}</p>

            <button class="btn" onClick={addProduct}>
              Add to Cart
            </button>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Product;
