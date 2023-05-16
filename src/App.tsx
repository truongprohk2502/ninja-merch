import { Component, createSignal } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";
import banner from "./assets/banner.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

const App: Component = () => {
  const [darkTheme, setDarkTheme] = createSignal<boolean>(false);

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4 justify-end"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={() => setDarkTheme((prev) => !prev)}
        >
          light_mode
        </span>
        <h1 class="mr-auto">Ninja Merch</h1>

        <A href="/">Home</A>
        <A href="/cart">Cart</A>
      </header>

      <img class="rounded-md" src={banner} alt="site banner" />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Routes>
    </div>
  );
};

export default App;
