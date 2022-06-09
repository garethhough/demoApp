import Counter from "./Counter";

function Nav({ menu, name, count, setCount}) {
    return (
      <nav id="nav_container">
        <ul>
          {menu.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
        <Counter name={name} count={count} setCount={setCount} />
      </nav>
    );
  }

  export default Nav;