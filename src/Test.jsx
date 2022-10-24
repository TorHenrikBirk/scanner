import React from "react";
import { useStoreDispatch, useStoreState } from "easy-peasy";
import { useState } from "react";
import DownloadButton from "./components/DownloadButton.jsx";

export default function Test() {
  //array state. Når array oppdatere seg, blir innholdet i denna komponenten re-rendra
  const items = useStoreState((state) => state.items);
  const dispatch = useStoreDispatch();
  const [value, setValue] = useState("");

  function onSubmit() {
    if (items.length === 0) {
      return dispatch.addItem(value);
    }
    const lastItem = items[items.length - 1];
    if (lastItem.mac && lastItem.sn) dispatch.addItem(value);
    else dispatch.updateItem(value);
  }

  return (
    <div
      style={{ borderRight: "1px solid gray", padding: "8px", height: "100%" }}
      className="Test"
    >
      <form onSubmit={onSubmit}>
        <input
          value={value}
          autoFocus
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
      <DownloadButton />
      {/* 
      <br />
      <br />

      <b>Array:</b>

      
      <p>{`[ ${items.map((line) => " " + JSON.stringify(line) + " ")}]`}</p> */}
    </div>
  );
}
