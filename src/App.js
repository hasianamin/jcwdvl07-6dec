import "./App.css";
import AnotherShowData from "./components/AnotherShowData";
import Counter from "./components/Counter";
import ShowCounter from "./components/ShowCounter";
import ShowData from "./components/ShowData";
import { useState } from "react";

function App() {
  const [newData, setNewData] = useState(20);
  const [newData1, setNewData1] = useState(20);

  return (
    <>
      <ShowCounter />
      <Counter />
      <div style={{ marginTop: "4rem" }}>
        <ShowData newData={newData} newData1={newData1} />
        <AnotherShowData newData={newData} />
      </div>
    </>
  );
}

export default App;
