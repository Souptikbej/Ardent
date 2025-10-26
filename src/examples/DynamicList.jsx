import React, { useState } from "react";

function DynamicList() {
  const [items, setItems] = useState(["Apple", "Banana"]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic List Example</h2>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}> ❌ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicList;
