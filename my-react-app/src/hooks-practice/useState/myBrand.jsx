import { useState } from "react";

export default function MyBrand() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red",
  });

  const changeColor = () => {
    setCar((prev) => ({
      ...prev,
      color: prev.color === "red" ? "blue" : "red",
    }));
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}
      </h2>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}
