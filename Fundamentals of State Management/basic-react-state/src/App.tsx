// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const [state, anotherState] = useState(1);

//   useEffect(() => {}, []);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const asyncIncrement = () => {
    // setTimeout(() => {
    setTimeout(() => {
      // setCount(count + 1);
      setCount((previousCount: number) => previousCount + 1);
    }, 3000);
  };

  return (
    <>
      <h1>Basic Increment App</h1>
      <p>Count : {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={asyncIncrement}>Async Increment</button>
      </div>
    </>
  );
}

export default App;
