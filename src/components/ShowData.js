import { useState } from "react";
import NestedShowData from "./NestedShowData";

const ShowData = ({ newData, newData1 }) => {
  const [data, setData] = useState(10);
  return (
    <div>
      <div>{data}</div>
      <div>{newData}</div>
      <div>{newData1}</div>

      <NestedShowData newData={newData} />
    </div>
  );
};

export default ShowData;
