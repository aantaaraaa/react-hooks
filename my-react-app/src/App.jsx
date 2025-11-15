import "./index.css";
import ColorChanger from "./hooks-practice/useState/colorChanger.jsx";
import MyBrand from "./hooks-practice/useState/myBrand";
import Counter from "./hooks-practice/useState/counter.jsx";
import AutoCounter from "./hooks-practice/useEffect/AutoCounter";

function App() {
  return (
    <>
      <ColorChanger />
      <MyBrand />
      <Counter />
      <AutoCounter />
    </>
  );
}

export default App;
