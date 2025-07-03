import { useState } from "react";
import { login } from "../../services/apiServices";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/Action";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const data = await login(dataForm.email, dataForm.password);
    console.log(data);
    if (data?.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
    } else {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmitLogin}>
        <label htmlFor="">email:</label>
        <input
          type="email"
          name="email"
          value={dataForm.email}
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor="">password:</label>
        <input
          type="password"
          name="password"
          value={dataForm.password}
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
