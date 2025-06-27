import { useState } from "react";

const Lesson31 = () => {
  const [count, setCount] = useState(0);
  const handleClickPlus = () => {
    // this.state({state}, callback);
    // react hook không có callback when set state
    // react hook : setState(state)
    setCount((x) => x + 1); //setCount(0 + 1)
    setCount((x) => x + 1); // setCount(0 + 1)
    setCount((count) => count + 1); // setCount(0 +1)
    //queue hàng đợi

    // trong 3 cái này thì trong react chỉ render đúng 1 lần gộp thành 1 và chạy 1 lần batching
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // batching
  };
  return (
    <>
      <button onClick={handleClickPlus}>+ 3 units</button>
      <div>Count {count}</div>
    </>
  );
};

export default Lesson31;
