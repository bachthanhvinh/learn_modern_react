import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lesson1 from "./Chapter10/lesson1/Lesson1";
import FormControl from "./Chapter10/L5_control_uncontrolled/formControl";
import FormUnControlled from "./Chapter10/L5_control_uncontrolled/formUnControlled";
import TranditionalForm from "./Chapter10/lesson6FormMikvsReactForm/TranditionalForm";
import FormHook from "./Chapter10/lesson6FormMikvsReactForm/FormHook";
import AnonymousFunction from "./Chapter10/Lesson7_anonymousf/AnonymousFunction";
import Lesson8 from "./Chapter10/Lesson8_addEHandlers/Lesson8";
import Lesson9 from "./Chapter10/Lesson9/Lesson9";
import Lesson10 from "./Chapter10/Lesson10/Lesson10";
import Lesson19 from "./Chapter11/Lesson19";
import Lesson20 from "./Chapter11/Lesson20";

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
      {/* <Lesson8 /> */}
      {/* <Lesson9 /> */}
      {/* <Lesson10 /> */}
      {/* <Lesson19 /> */}
      <Lesson20 />
    </>
  );
}

export default App;
