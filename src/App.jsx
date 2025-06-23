import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lesson1 from "./Lesson/lesson1/Lesson1";
import FormControl from "./Lesson/L5_control_uncontrolled/formControl";
import FormUnControlled from "./Lesson/L5_control_uncontrolled/formUnControlled";
import TranditionalForm from "./Lesson/lesson6FormMikvsReactForm/TranditionalForm";
import FormHook from "./Lesson/lesson6FormMikvsReactForm/FormHook";
import AnonymousFunction from "./Lesson/Lesson7_anonymousf/AnonymousFunction";
import Lesson8 from "./Lesson/Lesson8_addEHandlers/Lesson8";

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
      {/* <TranditionalForm /> */}
      {/* <FormHook /> */}
      {/* <AnonymousFunction /> */}
      <Lesson8 />
    </>
  );
}

export default App;
