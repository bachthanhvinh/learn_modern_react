import { produce } from "immer";
export default function Lesson25_1() {
  //// immer

  const person = [
    {
      city: "hoabinh",
      country: "vietnam",
    },
    {
      title: "dev",
      detail: {
        position: "boss",
        salary: "5k",
      },
    },
  ];
  //immutable:
  //   - sẵn sàng học cái mới : đọc dóc của thư viện,sử dụng các kiểu API mà thư viện cung cấp
  //  - view: convert từ APIs thư viện ra javascript (object/array)
  // - lưu trữ dữ liệu lớn, performance
  // immmer:
  // không còn đọc docs để hiểu APIs
  //- viết code theo kiểu 'mutate', mà  không làm thay đổi biến ban đầu
  // - lưu trữ dữ liệu lớn, performance

  const newPerson = produce(person, (draft) => {
    draft.push({ interest: "game,learn,calisthenic" });
    draft[0].city = "Thành vinh";
  });
  console.log(">>> person", person, ">>> newPerson", newPerson);
  return <></>;
}
