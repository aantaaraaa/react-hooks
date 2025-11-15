import { useContext } from "react";
import { ColorContext } from "./ColorContext";

export default function ColorBox() {
  const { color } = useContext(ColorContext);

  return (
    <div style={{
      width: "200px",
      height: "100px",
      background: color,
      border: "1px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "12px"
    }}>
      This box changes color!
    </div>
  );
}
