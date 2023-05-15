import type { Component } from "solid-js";
import Card from "./components/Card";
import banner from "./assets/banner.png";

const App: Component = () => {
  console.log("hello, ninjas!");

  return (
    <div>
      <header>
        <h1>Ninja Merch</h1>
      </header>

      <img src={banner} alt="site banner" />

      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;
