export default function Lesson22() {
  //// Spread syntax {...} để coppy array/object
  const person = {
    name: "vinh",
    address: {
      city: "hoabinh",
      country: "vietnam",
    },
    job: {
      title: "dev",
      detail: {
        position: "boss",
        salary: "5k",
      },
    },
  };
  //   const newPerson = { ...person };
  //   newPerson.name = "thành vinh";
  //   console.log("person", person, "NewPerson", newPerson);

  // coppy như này không được vì spread syntax chỉ coppy được 1 tầng thôi
  // tầng thứ 2 không thể copy được nên nó chỉ được gọi là shallow
  //   newPerson.address.city = "phú thọ";
  //   console.log("person", person, "NewPerson", newPerson);

  // muốn coppy phải làm như này không khuyên dùng cách này
  const newPerson = {
    ...person,
    address: {
      ...person.address,
      city: "phú thọ",
    },
  };
  console.log("person", person, "NewPerson", newPerson);

  return <></>;
}
