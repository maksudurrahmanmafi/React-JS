import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  let ClickBtn = () => {
    setCount(pre => pre+1)
  };
  const counterStyle = {
    border: "1px solid purple",
    padding: "10px",
    background: "white",
  };
  return (
    <div style={counterStyle}>
      <h2>Count : {count} </h2>
      <button onClick={ClickBtn} className="btn" >
        Add to click
      </button>
    </div>
  );
}
