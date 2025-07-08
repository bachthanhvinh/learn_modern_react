import { useState } from "react";

const Lesson37_4 = () => {
  //   /// giảm lược các biến không cần thiết fullname có tó thể tính toán được và không cần phải tạo thêm 1 state

  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   // không dùng state fullname nữa
  //   //   const [fullName, setFullName] = useState("");
  //   const handleOnChangeFirstName = (e) => {
  //     setFirstName(e.target.value);
  //     // setFullName(`${e.target.value}  ${lastName}`);
  //   };
  //   const handleOnChangeLastName = (e) => {
  //     setLastName(e.target.value);
  //     // setFullName(`${firstName}  ${e.target.value}`);
  //   };
  //   // Mình có thể tính toán được nhờ các state liên quan thì không cần state
  //   const fullName = `${firstName} ${lastName}`;
  //   return (
  //     <>
  //       <form action="">
  //         <label htmlFor="">First Name:</label>
  //         <input
  //           type="text"
  //           onChange={(e) => {
  //             handleOnChangeFirstName(e);
  //           }}
  //         />
  //         <label htmlFor="">Last Name:</label>
  //         <input
  //           type="text"
  //           onChange={(e) => {
  //             handleOnChangeLastName(e);
  //           }}
  //         />
  //       </form>
  //       <div>Full Name:{fullName}</div>
  //     </>
  //   );

  const initialItems = [
    { title: "pretzels", id: 0 },
    { title: "crispy seaweed", id: 1 },
    { title: "granola bar", id: 2 },
  ];
  const [items, setItems] = useState(initialItems);
  const [selectedItemId, setSelectedId] = useState(0);

  const selectedItemItem = items.find((item) => item.id === selectedItemId);
  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItemItem.title}.</p>
    </>
  );
};
export default Lesson37_4;
