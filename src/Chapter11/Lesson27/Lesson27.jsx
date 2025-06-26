import { useEffect, useState } from "react";
import HomeWork27 from "./HomeWork27";
import CreateUser from "./CreateUser";
import { getUser } from "../../services/apiServices";

const Lesson27 = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    getApiUser();
  }, []);

  const getApiUser = async () => {
    const res = await getUser(1, 3);
    if (res.EC === 0) {
      setDataUser(res.DT.users);
    } else {
    }
  };
  const addUser = (formData) => {
    setDataUser([formData, ...dataUser]);
  };
  return (
    <>
      <h1>Lesson27</h1>
      <CreateUser addUser={addUser} />
      <HomeWork27 dataUser={dataUser} />
    </>
  );
};
export default Lesson27;
