//import './App.css';
import Test from "./Test";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";
import Output from "./Output";

function App() {
  return (
    <StoreProvider store={store}>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <Test />
        <Output />
      </div>
    </StoreProvider>
  );
}

export default App;
