import { useState } from "react";
import Timer from "./Timer";

const Lesson29 = () => {
  const [count, setCount] = useState(0);
  // copy state hien tai dang luu
  // setNumber(0 + 5); tạo snapshot, tính toán
  // alert(0);

  const handleClick2 = () => {
    setCount(count + 5);
    setTimeout(() => {
      alert(count);
    }, 3000);
  };

  return (
    <>
      <button
        onClick={() => {
          // let n = count;
          // n += 5;
          setCount(count + 5);
          alert(count);
        }}
      >
        + 5 units
      </button>
      <div>Count {count}</div>
      <button
        onClick={() => {
          handleClick2();
        }}
      >
        + 5 units
      </button>
      <div>Count {count}</div>
      <Timer />
    </>
  );
};

export default Lesson29;
