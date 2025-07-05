import { useEffect, useRef, useState } from "react";
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
import Lesson21 from "./Chapter11/Lesson21";
import Lesson22 from "./Chapter11/Lesson22";
import Lesson23 from "./Chapter11/Lesson23";
import Lesson24 from "./Chapter11/Lesson24";
import Lesson25 from "./Chapter11/Lesson25";
import Lesson25_1 from "./Chapter11/Lesson25_1";
import Lesson26 from "./Chapter11/Lesson26/Lesson26";
import Lesson27 from "./Chapter11/Lesson27/Lesson27";
import Lesson28 from "./Chapter11/Lesson28/Lesson28";
import Lesson29 from "./Chapter11/Lesson29/Lesson29";
import Lesson30 from "./Chapter11/Lesson30/Lesson30";
import Lesson31 from "./Chapter11/Lesson31/Lesson31";
import Lesson32 from "./Chapter11/Lesson32/Lesson32";
import Lesson33 from "./Chapter11/Lesson33/Lesson33";
import Lesson33_2 from "./Chapter11/Lesson33/Lesson33_2";
import Lesson34 from "./Chapter11/Lesson34/Lesson34";
import Login from "./Component/Authen/Login";
import Lesson35 from "./Chapter11/Lesson35/Lesson35";
import { setLoadingBarRef } from "./utils/axiosCustome";
import LoadingBar from "react-top-loading-bar";
import Lesson36 from "./Chapter11/Lesson36/Lesson36";
import Lesson37_2 from "./Chapter13/Lessson37_2/Lessson37_2";
function App() {
  // const [name, setName] = useState("");
  const loadingRef = useRef(null);

  useEffect(() => {
    setLoadingBarRef(loadingRef); // Gửi ref sang axios interceptor
  }, []);
  return (
    <>
      <LoadingBar color="#f11946" height={3} ref={loadingRef} />

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
      {/* <Lesson20 /> */}
      {/* <Lesson22 /> */}
      {/* <Lesson23 /> */}
      {/* <Lesson24 /> */}
      {/* <Lesson25 /> */}
      {/* <Lesson25_1 /> */}
      {/* <Lesson26 /> */}
      {/* <Lesson27 /> */}
      {/* <Lesson28 /> */}
      {/* <Lesson29 /> */}
      {/* <Lesson30 /> */}
      {/* <Lesson31/> */}
      {/* <Lesson32 /> */}
      {/* <Lesson33 /> */}
      {/* <Lesson33_2 /> */}
      {/* <Lesson34 /> */}

      <Login />
      {/* <Lesson35 /> */}
      {/* <Lesson36 /> */}
      <Lesson37_2 />
    </>
  );
}

export default App;
