import { useState } from "react";

const User = (props) => {
  const [showImage, setShowImage] = useState(true);

  const { item, index } = props;
  const handleClickHideShow = () => {
    setShowImage((prev) => !prev);
  };

  return (
    <>
      <article key={`${index}-user`} className="section-1__list">
        <div className="idUser">ID: {item.id}</div>
        <div className="username">Username: {item.username}</div>
        <div className="image">
          {showImage ? (
            <img
              src={
                `data:image/jpeg;base64,${item?.image}` ||
                "https://via.placeholder.com/150"
              }
              alt="ImageUser"
            />
          ) : (
            ""
          )}
        </div>
        <button onClick={() => handleClickHideShow()}>Hide/Show Images</button>
      </article>
    </>
  );
};
export default User;
