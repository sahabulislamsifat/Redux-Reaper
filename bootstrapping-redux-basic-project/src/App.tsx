// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Outlet } from "react-router";
import Navbar from "./components/ui/layouts/Navbar";

// import { Button } from "./components/ui/button";

// function App() {
//   const [count, setCount] = useState(0)

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
//   )
// }

// export default App

// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/features/hook/hook";

// import { decrement, increment } from "./features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./features/hook/hook";

// function App() {
//   const dispatch = useAppDispatch();

//   const { count } = useAppSelector((state) => state.reducer);
//   console.log(count);

//   const handleIncrement = (amount: number) => {
//     dispatch(increment(amount));
//   };

//   const handleDecrement = () => {
//     dispatch(decrement());
//   };

//   return (
//     <>
//       <div>
//         <h1>Counter with Redux</h1>
//         <button onClick={() => handleIncrement(5)}>Increment by 5</button>
//         <button onClick={() => handleIncrement(1)}>Increment</button>
//         <div>{count}</div>
//         {/* <div>0</div> */}
//         <button onClick={handleDecrement}>Decrement</button>
//       </div>
//     </>
//   );
// }

// export default App;

const App = () => {
  return (
    <>
      {/* <h1>Basic Todo APP</h1> */}
      {/* <Button>ShadCN UI</Button> */}

      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default App;
