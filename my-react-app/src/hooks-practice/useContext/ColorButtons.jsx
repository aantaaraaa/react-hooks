import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export default function ColorButtons() {
  const { setColor } = useContext(ColorContext);

  return (
    <>
      <button onClick={() => setColor("lightblue")}>Blue</button>
      <button onClick={() => setColor("lightgreen")}>Green</button>
      <button onClick={() => setColor("pink")}>Pink</button>
      <button onClick={() => setColor("lightgray")}>Reset</button>
    </>
  );
}
