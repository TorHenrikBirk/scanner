//import './App.css';
import React from "react";
import Test from "./Test.jsx";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";
import Output from "./Output.jsx";

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
