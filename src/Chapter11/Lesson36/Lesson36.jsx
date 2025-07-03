import { useState } from "react";

const Lesson36 = () => {
  const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar landscape", seen: false },
    { id: 2, title: "Terracotta", seen: true },
  ];

  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);
  const handleClickSeenMy = (id, seenCheck) => {
    let ArrayNew = [...myList];
    let itemMy = ArrayNew.find((item) => item.id === id);
    itemMy.seen = !seenCheck;
    setMyList(ArrayNew);
  };
  const handleClickSeenYour = (id, seenCheck) => {
    let ArrayNew = [...yourList];
    let itemMy = ArrayNew.find((item) => item.id === id);
    itemMy.seen = !seenCheck;
    setYourList(ArrayNew);
  };
  return (
    <>
      <h3>Art Bucket list</h3>
      <section>
        <h3>My list of art to see:</h3>
        {myList.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <input
                  type="checkbox"
                  name=""
                  checked={item.seen}
                  onChange={() => handleClickSeenMy(item.id, item.seen)}
                />{" "}
                {item.title}
              </li>
            </ul>
          );
        })}
      </section>
      <section>
        <h3>Your list of art to see:</h3>
        {yourList.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <input
                  type="checkbox"
                  name=""
                  checked={item.seen}
                  onChange={() => handleClickSeenYour(item.id, item.seen)}
                />{" "}
                {item.title}
              </li>
            </ul>
          );
        })}
      </section>
    </>
  );
};

export default Lesson36;
