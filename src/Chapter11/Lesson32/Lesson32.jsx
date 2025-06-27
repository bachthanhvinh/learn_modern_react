import { useState } from "react";

const Lesson32 = () => {
  const [data, setData] = useState({
    name: "vinh",
    age: "21",
  });
  const handleClick = () => {
    // bad code
    // data.name = "thành vinh";
    // data.age = "22";
    // good code
    setData({
      name: "thànhvinh",
      postion: "dev",
    });
  };
  return (
    <>
      <div>Data : {JSON.stringify(data)}</div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Change
      </button>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        DosomeThing
      </button>
    </>
  );
};
export default Lesson32;
