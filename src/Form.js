import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      alert(`Name: ${name}\n Email:${email}`);
      clearFields();
    } else {
      alert("Please Fill Form Correctly!");
    }
  };
  const clearFields = () => {
    setName("");
    setEmail("");
  };

  const getFeilds = (propName, e) => {
    let input = e.target.value;
    // let formValues = {
    //   [propName]: input
    // };
    propName === "name" ? setName(input) : setEmail(input);
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => getFeilds("name", e)}
          />
        </label>
        <br />
        <br />
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => getFeilds("email", e)}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
