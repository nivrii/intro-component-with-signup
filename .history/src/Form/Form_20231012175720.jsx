import "./Form.css";
import { useState } from "react";
export function Form() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  }
  
  return (
    <form action="submit" className="form" onSubmit={(e)=>handleChange(e.currentTarget)}>
      <input
        type="text"
        placeholder="First Name"
        name="fName"
        value={person.firstName}
        id="fName"
        className="input"
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lName"
        value={person.lastName}
        id="lName"
        className="input"
      />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        value={person.email}
        id="email"
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={person.password}
        id="password"
        className="input"
      />
      <button type="submit" className="btn">
        Claim your free trial
      </button>
      <div className="pWrap">
        <p>By clicking the button, you are agreeing to our</p>
        <p>Terms and Services</p>
      </div>
    </form>
  );
}
