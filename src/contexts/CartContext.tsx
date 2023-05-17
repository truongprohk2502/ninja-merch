import { Component, JSXElement, createContext, useContext } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

interface ICartProduct {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

interface IProps {
  children: JSXElement;
}

interface ICartContext {
  items: ICartProduct[];
  setItems: SetStoreFunction<ICartProduct[]>;
}

export const CartContext = createContext<ICartContext>({
  items: [],
  setItems: () => {},
});

export const CartProvider: Component<IProps> = (props) => {
  const [items, setItems] = createStore<ICartProduct[]>([
    { title: "test item", quantity: 2, price: 15, id: 100 },
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
