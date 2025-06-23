const Lesson19 = () => {
  const person = {
    name: "vinh",
    age: 21,
  };
  //   person là biến tham chiếu tới object
  // => person lưu tại stack, còn giá trị của nó, lưu tại heap.

  console.log(person);
  // add the phone
  person.phone = "012232412";
  // change the name
  person.name = "thanhvinh";
  // delete age
  delete person.age;
  /// chỉ thay đổi tại heap ở trên
  /// còn phần này là thay đổi phẩn stack bị lỗi thay đổi trực tiếp
  //   person = { name: "vinh" };
  return <></>;
};
export default Lesson19;
