/////////////// không nên dùng cách viết code này làm thay đổi đâu ra của component/////////////
///==== impure function:
// let price = 100,
//   tax = 0;
// export default function CalculateVAT(props) {
//   //mutate
//   tax = tax + 5;
//   return (
//     <div>
//       {" "}
//       VAT = {(price * tax) / 100} with PRICE = {price}
//     </div>
//   );
// }

/////// pure conponenet
export default function CalculateVAT(props) {
  const { tax, price } = props;
  console.log(tax, price);
  return (
    <div>
      {" "}
      VAT = {(price * tax) / 100} with PRICE = {price}
    </div>
  );
}
