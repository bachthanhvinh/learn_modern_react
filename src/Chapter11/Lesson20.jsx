//#20. What's wrong with 'normal' assign/copy ?
export default function Lesson20() {
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
  return <></>;
}
