import "./Form.css";
import { useState } from "react";
export function Form() {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);
    e.currentTarget.reset();
  };

  return (
    <form action="submit" className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="fName"
        id="fName"
        className="input"
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lName"
        id="lName"
        className="input"
      />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        id="email"
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
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
