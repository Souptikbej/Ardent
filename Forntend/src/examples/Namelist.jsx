import React from "react";

function Namelist() {
  const names = ["Souptik", "Riya", "Aniket", "Suman"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>List Rendering Example</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Namelist;
