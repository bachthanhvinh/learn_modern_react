import { useEffect, useState } from "react";
import { getUser } from "../../services/apiServices";
import User from "./User";
import CreateUser from "./CreateUser";
import "./HomeWork27.scss";
const HomeWork27 = (props) => {
  const { dataUser } = props;
  console.log(dataUser);
  return (
    <>
      <section className="section-27">
        <div className="section-27_flex">
          {dataUser?.map((item, index) => {
            return <User key={item.id} item={item} index={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default HomeWork27;
