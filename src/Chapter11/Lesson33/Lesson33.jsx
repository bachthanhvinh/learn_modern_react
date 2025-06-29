import React, { useState } from "react";

const Lesson33 = () => {
  const [formData, setFormData] = useState({
    name: "",
    fullName: "vinh",
    password: "",
  });
  const handleOnChange = (e) => {
    // setFormData({
    //   //not merge
    //   [e.target.name]: e.target.value,
    // });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>
        <input
          type={"text"}
          name="name"
          value={formData.name}
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor="">fullName: </label>
        <input
          type={"text"}
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleOnChange(e)}
        />
        <label htmlFor="">password: </label>
        <input
          type={"password"}
          name="password"
          value={formData.password}
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

// class Lesson33 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       fullName: "vinh",
//       password: "",
//     };
//   }
//   handleOnChage = (e) => {
//     /// bad code
//     // this.state.name = e.target.value;
//     // good code
//     this.setState({
//       //   [e.target.name]: e.target.value,
//       // merge state (react class auto merge)
//       name: e.target.value,
//     });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(this.state);
//   };
//   render() {
//     return (
//       <>
//         <form action="" onSubmit={this.handleSubmit}>
//           <label htmlFor="">Name: </label>
//           <input
//             type={"text"}
//             name="name"
//             value={this.state.name}
//             onChange={(e) => this.handleOnChage(e)}
//           />
//           <label htmlFor="">fullName: </label>
//           <input
//             type={"text"}
//             name="fullName"
//             value={this.state.fullName}
//             onChange={(e) => this.handleOnChage(e)}
//           />
//           <label htmlFor="">password: </label>
//           <input
//             type={"password"}
//             name="password"
//             value={this.state.password}
//             onChange={(e) => this.handleOnChage(e)}
//           />
//           <button type="submit">Submit</button>
//         </form>
//       </>
//     );
//   }
// }
export default Lesson33;
