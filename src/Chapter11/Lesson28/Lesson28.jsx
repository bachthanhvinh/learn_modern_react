import { useState } from "react";

const Lesson28 = () => {
  const [count, setCount] = useState(0);
  const handleClickPlus = () => {
    // this.state({state}, callback);
    // react hook không có callback when set state
    // react hook : setState(state)
    setCount((x) => x + 1); //setCount(0 + 1)
    setCount((x) => x + 1); // setCount(0 + 1)
    setCount((count) => count + 1); // setCount(0 +1)
    //queue hàng đợi

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClickPlus}>+ 3 units</button>
      <div>Cout {count}</div>
    </>
  );
};

export default Lesson28;
