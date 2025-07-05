import { useState } from "react";

const Lesson37_2 = () => {
  // ví dụ nhóm các state liên quan tới nhau
  const [postion, setPosition] = useState({
    x: 0,
    y: 0,
  });
  // ví dụ không nhóm lại
  const [postionX, setPostionX] = useState(0);
  const [postionY, setPostionY] = useState(0);

  return (
    <>
      <div
        onPointerMove={(e) => {
          //   setPosition({
          //     x: e.clientX,
          //     y: e.clientY,
          //   });
          setPostionX(e.clientX);
          setPostionY(e.clientY);
        }}
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${postionX}px, ${postionY}px)`,
            left: -10,
            right: -10,
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
};

export default Lesson37_2;
