import { useState } from "react";

const Lesson37_4 = () => {
  /// giảm lược các biến không cần thiết fullname có tó thể tính toán được và không cần phải tạo thêm 1 state

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // không dùng state fullname nữa
  //   const [fullName, setFullName] = useState("");
  const handleOnChangeFirstName = (e) => {
    setFirstName(e.target.value);
    // setFullName(`${e.target.value}  ${lastName}`);
  };
  const handleOnChangeLastName = (e) => {
    setLastName(e.target.value);
    // setFullName(`${firstName}  ${e.target.value}`);
  };
  // Mình có thể tính toán được nhờ các state liên quan thì không cần state
  const fullName = `${firstName} ${lastName}`;
  return (
    <>
      <form action="">
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          onChange={(e) => {
            handleOnChangeFirstName(e);
          }}
        />
        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          onChange={(e) => {
            handleOnChangeLastName(e);
          }}
        />
      </form>
      <div>Full Name:{fullName}</div>
    </>
  );
};
export default Lesson37_4;
