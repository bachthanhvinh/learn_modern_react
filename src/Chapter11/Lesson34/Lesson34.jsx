import { useState } from "react";
import { useImmer } from "use-immer";
const Lesson34 = () => {
  const [formData, setFormData] = useImmer({
    name: "",
    fullName: "",
    password: "",
    address: {
      country: "vietnam",
      province: "hoabinh",
    },
  });

  const handleOnChange = (e) => {
    const path = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [path]: value,
    });
    //  const path = e.target.name.split(".");
    // const value = e.target.value;
    // setFormData((draft) => {
    //   let current = draft;
    //   for (let i = 0; i < path.length - 1; i++) {
    //     current = current[path[i]];
    //   }
    //   current[path[path.length - 1]] = value;
    // });
  };
  const handleOnChangeCountry = (e) => {
    // setFormData({
    //   ...formData,
    //   address: {
    //     ...formData.address,
    //     country: e.target.value,
    //   },
    // });
    setFormData((draft) => {
      // modify state (Không phải là sửa đổi trực tiếp state của react)
      // sửa đổi thông qua draft
      draft.address.country = e.target.value;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">province:</label>
        <input
          type="text"
          name="province"
          defaultValue={formData.address.province}
          // onChange={(e) => handleOnChangeProvince(e)}
        />
        <label htmlFor="">country:</label>
        <input
          type="text"
          name="country"
          value={formData.address.country}
          onChange={(e) => handleOnChangeCountry(e)}
        />
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor="">fullName:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor="">password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Lesson34;
