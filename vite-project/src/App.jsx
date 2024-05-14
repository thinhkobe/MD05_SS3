import { useState } from "react";
import "./App.css";
import Clock from "./component/Clock";
import MyComponent from "./component/MyComponent";
import FromLogin from "./component/FromLogin";
import FormRegister from "./component/FormRegister";
import Counter from "./component/Counter";

function App() {
  const [uesrs, setUsers] = useState([]);
  console.log("danh sach user", uesrs);

  return (
    <>
      <Counter />
      <Clock />
      <MyComponent />
      <FromLogin users={uesrs} />
      <FormRegister users={uesrs} setUsers={setUsers} />
    </>
  );
}

export default App;
