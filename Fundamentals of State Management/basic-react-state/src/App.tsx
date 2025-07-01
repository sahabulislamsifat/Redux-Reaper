// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import { useReducer } from "react";

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
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const asyncIncrement = () => {
//     // setTimeout(() => {
//     setTimeout(() => {
//       // setCount(count + 1);
//       setCount((previousCount: number) => previousCount + 1);
//     }, 3000);
//   };

//   return (
//     <>
//       <h1>Basic Increment App</h1>
//       <p>Count : {count}</p>
//       <div>
//         <button onClick={increment}>Increment</button>
//         <button onClick={asyncIncrement}>Async Increment</button>
//       </div>
//     </>
//   );
// }

// export default App;
// type UserInfo = {
//   name: string;
//   email: string;
//   phone: string;
// };

interface State {
  name: string;
  email: string;
  phone: string;
}

type Action =
  | { type: "FIELD_UPDATE"; payload: { field: keyof State; value: string } }
  | { type: "RESET" };

function App() {
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [phone, setPhone] = useState<string>("");

  // const [userInfo, setUserInfo] = useState<UserInfo>({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });

  // // const updateUserInfo = (input: keyof UserInfo, value: string) => {
  // const updateUserInfo = (e) => {
  //   // console.log(value);
  //   // setUserInfo({ ...userInfo, [input]: value });
  //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  // };

  const initialState: State = {
    name: "",
    email: "",
    phone: "",
  };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "FIELD_UPDATE":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [userInfo, dispatch] = useReducer(reducer, initialState);
  // console.log(userInfo);

  const handleOnChange = (e) => {
    dispatch({
      type: "FIELD_UPDATE",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userInfo);

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Phone:", phone);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            // value={name}
            value={userInfo.name}
            // onChange={(e) => updateUserInfo("name", e.target.value)}
            onChange={handleOnChange}
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            // value={email}
            value={userInfo.email}
            // onChange={(e) => setEmail(e.target.value)}
            // onChange={(e) => handleOnChange("email", e.target.value)}
            onChange={handleOnChange}
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Phone Number:</label>
          <br />
          <input
            type="tel"
            name="phone"
            // value={phone}
            value={userInfo.phone}
            // onChange={(e) => setPhone(e.target.value)}
            // onChange={(e) => handleOnChange("phone", e.target.value)}
            onChange={handleOnChange}
            placeholder="Enter your phone number"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          style={{ padding: "10px 20px" }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default App;
