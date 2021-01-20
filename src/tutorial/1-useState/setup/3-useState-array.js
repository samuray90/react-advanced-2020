import React, { useState } from "react";
import { listacurului } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(listacurului);
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        const removeItem = (id) => {
          let newPeople = people.filter((person) => person.id !== id);
          setPeople(newPeople);
        }; /*to remove an item using it's id make the variable let name it newThing and filter it people.filter targeting the person if it matches to the id*/
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>{" "}
            {/* the main constant which is using id as a parameter*/}
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        delete
      </button>
      {/* set a handler with the function and use the setPeople to clear ( make an empty array)*/}
    </>
  );
};

export default UseStateArray;
