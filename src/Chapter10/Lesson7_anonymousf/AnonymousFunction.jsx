export default function AnonymousFunction() {
  let a = function () {
    console.log("Anonymous function");
  };
  a();
  setTimeout(() => {
    console.log("setTimeout");
  }, 1000);
  return (
    <>
      <div>lesson7</div>
    </>
  );
}
