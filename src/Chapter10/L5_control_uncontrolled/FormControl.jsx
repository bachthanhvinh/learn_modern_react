import { useState } from "react";

const FormControl = () => {
  const [form, setForm] = useState({
    fname: "",
    femail: "",
    fpassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log(form);
  };
  //   console.log(form);
  return (
    <>
      <div>
        <label htmlFor="">name: </label>
        <input
          type="text"
          name="fname"
          value={form["fname"]}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">email: </label>
        <input
          type="email"
          name="femail"
          value={form["femail"]}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="">password: </label>
        <input
          type="password"
          name="fpassword"
          value={form["fpassword"]}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>
    </>
  );
};

export default FormControl;
