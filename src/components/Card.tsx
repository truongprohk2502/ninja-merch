import type { Component, JSXElement } from "solid-js";

interface IProps {
  rounded?: boolean;
  flat?: boolean;
  children: JSXElement;
}

const Card: Component<IProps> = ({ rounded, flat, children }) => {
  return (
    <div
      class="bg-white p-4 text-center rounded-md shadow-md"
      classList={{ "rounded-md": rounded, "shadow-md": !flat }}
    >
      {children}
    </div>
  );
};

export default Card;
