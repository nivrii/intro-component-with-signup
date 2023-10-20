import "./Form.css";
import { useState } from "react";

export function Form() {
  const [value, setValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    setValue(value + 1);
    console.log(newUser);
    e.currentTarget.reset();
  };

  const handleFName = (e) => {};
  return (
    <form action="submit" className="form" onSubmit={handleSubmit}>
      <div className="input-enclose">
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          id="fName"
          className="input"
          onChange={(e) => handleFName(e.target.value)}
        />
        <div className="err-enclose">
          <div className=" err err-fName">First Name Cannot Be Empty</div>
          <div className="err-fName">That does not look like a name</div>
        </div>
      </div>

      <div className="input-enclose">
        <input
          type="text"
          placeholder="Last Name"
          name="lName"
          id="lName"
          className="input"
        />
        <div className="err-enclose">
          <div className="err err-lName">Last Name Cannot Be Empty</div>
          <div className="err miss-lName">That does not look like a name</div>
        </div>
      </div>

      <div className="input-enclose">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          id="email"
          className="input"
        />
        <div className="err-enclose">
          <div className=" err err-email">Email Cannot Be Empty</div>
        </div>
      </div>

      <div className="input-enclose">
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          className="input"
        />
        <div className="err-enclose">
          <div className=" err err-password">Password Cannot Be Empty</div>
        </div>
      </div>

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
