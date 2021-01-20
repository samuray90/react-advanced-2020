import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "gagarin",
    message: "gooo",
    age: 22,
  });

  const [name, setName] = useState("johnny");
  const [age, setAge] = useState("55");
  const [message, setMessage] = useState("aaaaaaaa");
  const changeMessage = () => {
    // setPerson({
    // ...person,
    // message: "abracadabra",
    setMessage("bbbbbbbbb");
    // }); /*so here you setPerson with a different object and with (...person,) you keep the old value of the person*/
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        {" "}
        {/*make a constant with the click handler*/}
        change it
      </button>
    </>
  );
};

export default UseStateObject;
