//#21. Shallow copy và Deep copy
export default function Lesson21() {
  /// ví dụ này không làm thay đổi biến này, không làm ảnh hướng tới biến khác
  // vì nó tạo ra 2 biến trong stack newAge và age riêng biệt
  //   let age = 25;
  //   let newAge = age;
  //   newAge = newAge + 1;
  //   console.log(age, newAge);

  // ví dụ này bị thôi đổi vì đang cả 2 đang dùng chung phần heap
  let person = {
    name: "vinh",
    age: 21,
  };
  let member = person;

  member.age = 22;
  console.log(person);
  console.log(member);
  //   ==== deep copying nghĩa là 'các giá trị của biến mới' không liên quan gì tới biến cũ.
  // 2 biến tạo ra tách biệt nhau. thay đổi biến này không làm thay đổi biến còn lại.
  // (ví dụ counter)
  // deep === sâu
  // shallow copying nghĩa là 'copy một phần giá trị của biến'. thay đổi giá của biến copy
  // khiến thay đổi biến gốc.
  // (vì 2 biến đang trỏ tới cùng 1 object)
  // Shallow = not deep
  // ---------
  // Để copy object trong JS, chúng ta có các lựa chọn sau:
  // - sử dụng spread (...) syntax
  // - sử dụng Object.assign() method
  // - sử dụng JSON.stringify() và JSON.parse() methods
  // - sử dụng clone/cloneDeep() methond (thư viện lodash)
  return <></>;
}
