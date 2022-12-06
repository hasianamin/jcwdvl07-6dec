import React from "react";
import { useSelector } from "react-redux";

const ShowCounter = () => {
  const counter = useSelector((state) => state.counter.counter);

  return (
    <div
      style={{
        marginTop: "4rem",
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Counter : {counter}
    </div>
  );
};

export default ShowCounter;
