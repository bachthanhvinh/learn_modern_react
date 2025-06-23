const Lesson1 = () => {
  ////////// 7 kiểu dữ liệu nguyên thủy của javascript///////////////
  // 1. String
  //- là tập hợp của chuỗi ký tự, bắt đầu và kết thúc với dấu nháy đơn ' hoặc dấu nháy đôi "
  let greeting = "hi";
  console.log(greeting);
  // 2. number
  //- javascript sử dụng kiểu dữ liệu 'number' để hiển thị cho số nguyên (integer) và số thực (float)
  let num = 100;
  let price = 12.5;
  // 3. boolean
  //- Kiểu dữ liệu boolean có 2 giá trị true và false (viết thường)
  let inProgress = true;
  let completed = false;
  // 4.undefined
  //- Khi một biến được khai báo, tuy nhiên chưa 'gán/khởi tạo' giá trị cho nó, JS sẽ gán (assign)
  let counter;
  // 5. null
  // - Khi một biến được khai báo, tuy nhiên không có kiểu dữ liệu hoặc giá trị => null;
  const foo = null;
  // 6.bigint (ES2020)
  //   - Dùng để hiển thị số có giá trị lớn hơn 2^53 -1
  // - Để khởi tạo 1 biến là BigInt, thêm ký tự 'n' vào cuối number:
  // let bigInt = 9007199254740991n;
  // hoặc gọi hàm khởi tạo: let bigInt = BigInt(9007199254740991);
  let x = Number.MAX_SAFE_INTEGER;
  x = x + 1; // 9007199254740992
  x = x + 1; // 9007199254740992 (same as above => bugs)
  // 7.symbol(ES6)

  //////// object datatypes ///////
  let a = {};
  console.log(">>> check type a =", typeof a);
  let b = { name: "vinh", address: "thanhvinh" };
  console.log(">>> check type b =", typeof b);
  let c = ["a", "b", "c"];
  console.log(">>> chekc type c =", typeof c);
  let d = new Date();
  console.log(">>> check type d =", typeof d);
  return <></>;
};
export default Lesson1;
