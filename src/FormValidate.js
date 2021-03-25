import React, { useState } from "react";

export default function FormValidate() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("formData-->", formData);
    alert("Form Submitted");
    clearFields();
  };
  const clearFields = () => {
    setFormData((preValue) => {
      return {
        fname: "",
        lname: "",
        email: "",
        phone: ""
      };
    });
  };

  const getValue = (e) => {
    const { name, value } = e.target;

    console.log("name->", name);
    console.log("value->", value);

    setFormData((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value
      //   };
      // }
    });
  };
  return (
    <div className="App">
      <h2>
        Hello {formData.fname} {formData.lname}
      </h2>
      <p>{formData.email}</p>
      <p>{formData.phone}</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="fname">
          First Name:
          <input
            name="fname"
            type="text"
            value={formData.fname}
            onChange={getValue}
          />
        </label>
        <br />
        <br />
        <label htmlFor="lname">
          First Name:
          <input
            name="lname"
            type="text"
            value={formData.lname}
            onChange={getValue}
          />
        </label>
        <br />
        <br />
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={getValue}
          />
        </label>
        <br />
        <br />
        <label htmlFor="phone">
          phone:
          <input
            name="phone"
            type="number"
            value={formData.phone}
            onChange={getValue}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
