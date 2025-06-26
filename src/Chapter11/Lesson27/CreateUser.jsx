import { useState } from "react";
import "./CreateUser.scss";
const CreateUser = (props) => {
  const { addUser } = props;
  const [formData, setFormData] = useState({
    id: "",
    username: "",
    image: null,
    previewImage: "",
  });
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
  };
  const handleUploadImage = async (event) => {
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const result = reader.result;
          const base64String = result.split(",")[1];
          resolve(base64String);
        };

        reader.onerror = reject;
      });

    if (event.target && event.target.files && event.target.files[0]) {
      setFormData({
        ...formData,
        previewImage: URL.createObjectURL(event.target.files[0]),

        image: await toBase64(event.target.files[0]),
      });
    }
    console.log("img", form.image);
  };
  return (
    <>
      <fieldset className="createUser">
        <legend>Add new user:</legend>
        <form onSubmit={handleSubmit} className="createUser_form">
          <label htmlFor="">ID:</label>
          <input
            type="text"
            value={formData.id}
            name="id"
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor=""> Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => handleOnChange(e)}
          />
          <label htmlFor=""> Image:</label>
          <input
            type="file"
            name="image"
            onChange={(e) => handleUploadImage(e)}
          />
          <button className="createUser_btn" type="submit">
            Save
          </button>
        </form>
      </fieldset>
    </>
  );
};
export default CreateUser;
