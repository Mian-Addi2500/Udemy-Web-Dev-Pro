import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black rounded-lg mb-8 p-4 ">
        Tailwind CSS
      </h1>
      <Card username="chai aur code" btnText="click me" />
      <Card username="addi" />
    </>
  );
}

export default App;
