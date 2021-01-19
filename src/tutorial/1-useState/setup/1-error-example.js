import React from "react";

const ErrorExample = () => {
  let title = "hi don";
  // return (
  //   <div>
  //     <h1>{title}</h1>
  //   </div>
  // );
  const clickHandler = () => {
    title = "hello jajaja";
    console.log(title);
  };
  return (
    <div>
      <h3>{title}</h3>
      <button type="button" onClick={clickHandler(title)}>
        presss
      </button>
    </div>
  );
};

export default ErrorExample;
