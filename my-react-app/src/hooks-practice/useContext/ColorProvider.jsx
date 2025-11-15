import { useState } from "react";
import { ColorContext } from "./ColorContext";

export default function ColorProvider({ children }) {
  const [color, setColor] = useState("lightgray");

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
}
