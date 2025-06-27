import { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(10);

  //   useEffect(() => {
  //     const time = setInterval(() => {
  //       setTimer(timer - 1);
  //     }, 1000);
  //     return () => {
  //       clearInterval(time);
  //     };
  //   }, [timer]);
  return (
    <>
      <div className="timerCount">Timer: {timer}</div>
    </>
  );
};
export default Timer;
