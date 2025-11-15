import "./index.css";
import ColorChanger from "./hooks-practice/useState/colorChanger.jsx";
import MyBrand from "./hooks-practice/useState/myBrand";
import Counter from "./hooks-practice/useState/counter.jsx";
import AutoCounter from "./hooks-practice/useEffect/AutoCounter";
import ModifyDom from "./hooks-practice/useRef/ModifyDom";
import SquareNumber from "./hooks-practice/useMemo/SquareNumber";
import CounterCallback from "./hooks-practice/useCallback/CounterCallback";
import ColorProvider from "./hooks-practice/useContext/ColorProvider";
import ColorButtons from "./hooks-practice/useContext/ColorButtons";
import ColorBox from "./hooks-practice/useContext/ColorBox";

function App() {
  return (
    <>
      <ColorChanger />
      <MyBrand />
      <Counter />
      <AutoCounter />
      <ModifyDom />
      <SquareNumber />
      <CounterCallback />
      <ColorProvider>
      <ColorButtons />
      <ColorBox />
      </ColorProvider> 
    </>
  );
}

export default App;
