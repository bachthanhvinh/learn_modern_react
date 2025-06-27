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
  //   useEffect(() => {
  //     setInterval(() => {
  //       setTimer((timer) => timer - 1);
  //     }, 1000);
  //   }, []);
  return (
    <>
      <div className="timerCount">Timer: {timer}</div>
    </>
  );
};
export default Timer;
