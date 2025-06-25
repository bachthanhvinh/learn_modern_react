import { useEffect, useState } from "react";
import { getUser } from "../../services/apiServices";
import "./HomeWork.scss";
import User from "./user";
const HomeWork26 = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    getApiUser();
  }, []);

  const getApiUser = async () => {
    const res = await getUser(1, 3);
    if (res.EC === 0) {
      setDataUser(res.DT);
    } else {
    }
  };

  return (
    <>
      <section className="section-1">
        {dataUser?.users?.map((item, index) => {
          return <User key={item.id} item={item} index={index} />;
        })}
      </section>
    </>
  );
};

export default HomeWork26;
