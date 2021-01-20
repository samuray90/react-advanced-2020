import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };
  return (
    <section style={{ margin: "20rem 0" }}>
      <h3>regular counter</h3>
      <h2>{value}</h2>
      <button className="btn" onClick={() => setValue(value - 1)}>
        decrease
      </button>
      <button className="btn" onClick={reset}>
        reset
      </button>
      <button className="btn" onClick={() => setValue(value + 1)}>
        increase
      </button>
    </section>
  );
};

export default UseStateCounter;
