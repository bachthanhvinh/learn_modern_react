export default function Lesson8() {
  const handleOnClick2 = () => {
    alert("handleClick2");
  };
  return (
    <>
      <div>
        <button
          // passing function
          onClick={handleOnClick2}
        >
          Tham Chiếu
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            handleOnClick2(); // passing || anonymous function
          }}
        >
          Arrow function
        </button>
      </div>
    </>
  );
}
