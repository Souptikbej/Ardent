import React, { useState } from "react";

const App = () => {
  const [unam, setA] = useState("Souptik Bej");
  const [num , setB] = useState(0);
  const change = () => {
    setA("Sutapa Bej");
  };
  return (
    <div>
      <h1>User Name :{unam}</h1>
      <button onClick={change}>Change</button>
      <h1>Add to cart : {num}</h1>
      <button onClick={()=>{setB(num+1)}}>+</button>
      <button onClick={()=>{setB(num-1)}}>-</button>
    </div>
  );
};

export default App;
