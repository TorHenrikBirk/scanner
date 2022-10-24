// Tormod e leiSegTorbizz

import { useStoreState } from "easy-peasy";
import { useState } from "react";
import { CSVLink } from "react-csv";

export default function DownloadButton() {
  const [isFinished, setIsFinished] = useState(false);
  const items = useStoreState(state=>state.items)
  if (isFinished) {
   return <CSVLink data={items}>satan</CSVLink>
  }
  return <button onClick={() => setIsFinished(!false)}>Finish</button>;
}
