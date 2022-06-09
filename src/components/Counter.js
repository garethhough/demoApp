import { useState } from "react";

function Counter({count, setCount }) {


  return (
    <div id="button_container">
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <h1 className={count % 2 == 0 ? "blue" : "red"}>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Take 1</button>
    </div>
  );
}

export default Counter;






// ternary
// true ? (do this) : (do this)   line 12