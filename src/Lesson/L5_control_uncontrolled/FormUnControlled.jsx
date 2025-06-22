import { useRef } from "react";

const FormUnControlled = () => {
  const fnameRef = useRef("");
  const femailRef = useRef("");
  const fpasswordRef = useRef("");

  const handleSubmit = () => {
    const formData = {
      fname: fnameRef.current.value,
      femail: femailRef.current.value,
      fpassword: fpasswordRef.current.value,
    };
    console.log(formData);
  };
  return (
    <>
      <div>
        <label htmlFor="">name: </label>
        <input type="text" name="fname" ref={fnameRef} />
        <label htmlFor="">email: </label>
        <input type="email" name="femail" ref={femailRef} />
        <label htmlFor="">password: </label>
        <input type="password" name="fpassword" ref={fpasswordRef} />
      </div>
      <button onClick={() => handleSubmit()}>Submit</button>
    </>
  );
};

export default FormUnControlled;
