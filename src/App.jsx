import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lesson1 from "./Lesson/lesson1/Lesson1";
import FormControl from "./Lesson/L5_control_uncontrolled/formControl";
import FormUnControlled from "./Lesson/L5_control_uncontrolled/formUnControlled";
import TranditionalForm from "./Lesson/lesson6FormMikvsReactForm/TranditionalForm";

function App() {
  // const [name, setName] = useState("");
  return (
    <>
      {/* <div>
        <label htmlFor="">Name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div>My name {name}</div>
      </div>
      <div>
        {" "}
        <Lesson1 />
      </div> */}
      {/* <FormControl />
       */}
      {/* <FormUnControlled /> */}
      <TranditionalForm />
    </>
  );
}

export default App;
