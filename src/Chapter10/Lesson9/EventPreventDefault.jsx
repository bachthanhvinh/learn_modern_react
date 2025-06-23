import { useState } from "react";

const EventPreventDefault = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // ngăn chặn việc form mặc định load lại trang
    console.log(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">firstName</label>
        <input
          type="text"
          name="firstName"
          value={formData["firstName"]}
          onChange={(e) => handleOnChange(e)}
        />

        <label htmlFor="">lastName</label>
        <input
          type="text"
          name="lastName"
          value={formData["lastName"]}
          onChange={(e) => handleOnChange(e)}
        />

        <label htmlFor="">email</label>
        <input
          type="text"
          name="email"
          value={formData["email"]}
          onChange={(e) => handleOnChange(e)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default EventPreventDefault;
