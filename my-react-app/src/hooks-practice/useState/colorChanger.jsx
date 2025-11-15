import React from "react";
import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("Red");

  const changeColor = () => {
    setColor((prev) => (prev == "Red" ? "Blue" : "Red"));
  };

  return (
    <div>
      <h1>My favourite color is {color}</h1>
      <button onClick={changeColor}>Toggle color</button>
    </div>
  );
}
