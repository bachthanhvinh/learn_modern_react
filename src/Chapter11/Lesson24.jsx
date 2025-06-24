export default function Lesson24() {
  ////   JSON.stringify() chuyển từ Object -> JSON,JSON.parse() chuyển từ JSON -> Object

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

  const test = { name: "vinh", age: "21" };
  //   console.log(JSON.stringify(test));
  const testJSON = JSON.stringify(test);
  //   console.log(testJSON);
  //   console.log(JSON.parse(testJSON));

  // JSON.stringify từ Object -> String tạo 1 vùng nhớ  mới trong stack
  // JSON.parse từ String -> Object tạo 1 vùng nhớ  mới trong heap
  // mutate
  const newPerson = JSON.parse(JSON.stringify(person));
  // deep copy
  newPerson.address.city = "Phú thọ";
  console.log(">>> Check person", person, ">>> check NewPerson", newPerson);
}
