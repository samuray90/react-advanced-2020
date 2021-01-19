import React, { useState } from "react";
import { listacurului } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(listacurului);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear it now
      </button>
    </>
  );
};

export default UseStateArray;
