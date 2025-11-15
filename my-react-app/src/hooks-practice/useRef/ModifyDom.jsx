import { useRef } from "react";

export default function ModifyDom() {
  const inputElem = useRef(null);

  const btnClicked = () => {
    const elem = inputElem.current;

    if (elem.style.background === "blue") {
      elem.style.background = "white";
      elem.style.color = "black";
    } else {
      elem.style.background = "blue";
      elem.style.color = "white";
    }
  };

  return (
    <>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked} style={{ marginLeft: "10px" }}>
        Click Here
      </button>
    </>
  );
}
