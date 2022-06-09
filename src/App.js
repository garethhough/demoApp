import { useState } from "react";
import Nav from "./components/Nav";
import Counter from "./components/Counter";
import "./App.css";



function App() {
  // count is a variable, set count is a function
  const [count, setCount] = useState(0);
  
  const menu = ["About", "Portfolio", "Blog", "Home"];
  const name = "Gareth"
  return (
    <div id="app_container">
      <Nav menu={menu} name={name} count={count} setCount={setCount} />
 
      <div id="counter">
        {count % 2 === 0 ? <h1>The count is {count}</h1> : <h1>Not Even</h1> }

      </div>
      <Counter count={count} setCount={setCount} />
  
    </div>
  );
}

export default App;
