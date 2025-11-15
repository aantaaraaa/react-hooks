import { useState, useRef, useLayoutEffect } from "react";

export default function AutoResizeBox() {
  const textRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(50); 

  useLayoutEffect(() => {
    const width = textRef.current.getBoundingClientRect().width;
    setBoxWidth(width + 20); 
  }, []);

  return (
    <>
      <div
        style={{
          width: boxWidth,
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <span ref={textRef}>Auto Resize Text</span>
      </div>
    </>
  );
}
