import React, { useState } from "react";

const Lesson33_2 = () => {
  // spread syntax : shallow copy
  const [formData, setFormData] = useState({
    name: "vinh",
    fullName: "Thanhvinh",
    password: "1213",
    address: {
      country: "vietnam",
      local: "hoabinh",
    },
  });
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleOnChangeAddress = (e) => {
    setFormData({
      ...formData,
      address: {
        // spread syntax shallow copy lv 1
        ...formData.address,
        country: e.target.value,
      },
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Country: </label>
        <input
          type={"text"}
          name="country"
          onChange={(e) => handleOnChangeAddress(e)}
        />
        <label htmlFor="">Name: </label>
        <input
          type={"text"}
          name="name"
          value={formData.name}
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor="">fullName: </label>
        <input
          type={"text"}
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor="">password: </label>
        <input
          type={"password"}
          name="password"
          value={formData.password}
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Lesson33_2;
