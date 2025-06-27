import { useState } from "react";

const Lesson28 = () => {
  const [count, setCount] = useState(0);
  const handleClickPlus = () => {
    // let n = count;
    // n += 1;
    // n += 1;
    // n += 1;
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClickPlus}>+ 3 units</button>
      <div>Cout {count}</div>
    </>
  );
};

export default Lesson28;
