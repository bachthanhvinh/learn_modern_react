import _ from "lodash";
export default function Lesson25() {
  //// clone/cloneDeep() methond (thư viện lodash)

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
  /// clone này chỉ là shallow copy cũng chỉ copy được 1 tầng
  //   const personClone = _.clone(person); // shallow copy
  //   personClone.name = "Thành vinh132123";
  //   personClone.address.city = "phú thọ";
  //   console.log(">>> person", person, ">>> clone", personClone);
  /// cloneDeep là Deep copy
  const CloneDeep = _.cloneDeep(person); // Deep copy
  CloneDeep.name = "thanh vinh";
  CloneDeep.address.city = "phú thọ";
  CloneDeep.job.detail.position = "staff";
  console.log(">>> person", person, ">>> CloneDeep", CloneDeep);
}
