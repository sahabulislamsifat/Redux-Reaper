// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/features/hook/hook";

import { decrement, increment } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./features/hook/hook";

function App() {
  const dispatch = useAppDispatch();

  const { count } = useAppSelector((state) => state.reducer);
  console.log(count);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <>
      <div>
        <h1>Counter with Redux</h1>
        <button onClick={() => handleIncrement(5)}>Increment by 5</button>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <div>{count}</div>
        {/* <div>0</div> */}
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
