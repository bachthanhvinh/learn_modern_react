import CalculateVAT from "./CalculateVAT";

export default function Lesson10() {
  return (
    <>
      {/* <CalculateVAT />
      <CalculateVAT />
      <CalculateVAT /> */}
      <CalculateVAT price={100} tax={5} />
      <CalculateVAT price={100} tax={5} />
      <CalculateVAT price={100} tax={5} />
    </>
  );
}
