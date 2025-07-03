import _, { spread } from "lodash";
import { useState } from "react";
import { useImmer } from "use-immer";

const Lesson36 = () => {
  const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar landscape", seen: false },
    { id: 2, title: "Terracotta", seen: true },
  ];

  //   const [myList, setMyList] = useImmer(initialList);
  //   const [yourList, setYourList] = useImmer(initialList);
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);
  // use-immer//////////
  //   const handleClickSeenMy = (id, seenCheck) => {
  //     // let ArrayNew = [...myList];
  //     setMyList((draft) => {
  //       let itemMy = draft.find((item) => item.id === id);
  //       itemMy.seen = !seenCheck;
  //     });
  //   };
  //   const handleClickSeenYour = (id, seenCheck) => {
  //     // let ArrayNew = [...yourList];
  //     // let itemMy = ArrayNew.find((item) => item.id === id);
  //     // itemMy.seen = !seenCheck;
  //     setYourList((draft) => {
  //       let itemMy = draft.find((item) => item.id === id);
  //       itemMy.seen = !seenCheck;
  //     });
  //   };

  //cloneDeep////
  //   const handleClickSeenMy = (id, seenCheck) => {
  //     let CloneMyList = _.cloneDeep(myList);
  //     let itemMy = CloneMyList.find((item) => item.id === id);
  //     itemMy.seen = !seenCheck;
  //     setMyList(CloneMyList);
  //   };
  //   const handleClickSeenYour = (id, seenCheck) => {
  //     let CloneyourList = _.cloneDeep(yourList);
  //     let itemMy = CloneyourList.find((item) => item.id === id);
  //     itemMy.seen = !seenCheck;
  //     setYourList(CloneyourList);
  //   };
  const handleClickSeenMy = (id, seenCheck) => {
    // let Spread = [...myList];
    let itemMy = myList.filter((item) => item.id === id);
    itemMy[0].seen = !seenCheck;
    // console.log(Spread);
    setMyList(itemMy);
  };
  const handleClickSeenYour = (id, seenCheck) => {
    let itemMy = yourList.filter((item) => item.id === id);
    itemMy.seen = !seenCheck;

    // const newMyItem = [];
    console.log(myList);
    // setYourList([...yourList.seen, itemMy]);
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
