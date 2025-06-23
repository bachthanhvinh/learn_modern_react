import { useState } from "react";

const TranditionalForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const isValidInput = () => {
    console.log(">>> check formdata", formData);
    if (!formData.firstName) {
      setErrors({
        ...errors,
        firstName: "First name is required",
      });
      return;
    }
    if (!formData.lastName) {
      setErrors({
        ...errors,
        lastName: "Last name is required",
      });
      return;
    }
    if (!formData.email) {
      setErrors({
        ...errors,
        email: "email is required",
      });
      return;
    }
  };
  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    if (event.target.value) {
      setErrors({
        ...errors,
        [event.target.name]: "",
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    isValidInput();
    console.log(">>> check form data", formData);
  };
  console.log("check render tranditional Form");
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
        {errors.firstName && <div>{errors.firstName}</div>}
        <label htmlFor="">lastName</label>
        <input
          type="text"
          name="lastName"
          value={formData["lastName"]}
          onChange={(e) => handleOnChange(e)}
        />
        {errors.lastName && <div>{errors.lastName}</div>}
        <label htmlFor="">email</label>
        <input
          type="text"
          name="email"
          value={formData["email"]}
          onChange={(e) => handleOnChange(e)}
        />
        {errors.email && <div>{errors.email}</div>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TranditionalForm;
