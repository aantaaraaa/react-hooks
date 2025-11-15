import { useState, useCallback } from "react";

export default function CounterCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
    </>
  );
}
