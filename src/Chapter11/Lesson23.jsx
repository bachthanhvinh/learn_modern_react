export default function Lesson23() {
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
  const edu = {
    school: "biu",
    dergee: "Software engineering ",
  };
  // bị ghi đè và thay đổi cả mảng chính
  // const newPerson = Object.assign( person, number);
  // console.log("person", person, "NewPerson", newPerson);

  // không làm thay đổi mảng chính
  const newPerson = Object.assign({}, person, edu);
  // console.log("person", person, "NewPerson", newPerson);

  // newPerson.name = "thành vinh";
  // console.log("person", person, "NewPerson", newPerson);

  // vấn làm thay đổi mảng chính khi đi sâu vào tầng 2
  // vậy Object.assign vẫn giống như spread syntax cũng là shallow chỉ copy được 1 tầng
  newPerson.address.city = "phú thọ";
  console.log("person", person, "NewPerson", newPerson);
}
