import "./Form.css";
import { useState } from "react";

export function Form() {
  const [value, setValue] = useState(0);
  const [nameIsEmpty, setNameIsEmpty] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    setValue(value + 1);
    console.log(newUser);
    e.currentTarget.reset();
    handleFNameEmpty(newUser.fName)
  };
  const handleFNameEmpty = (e) => {
    if(e.value === ''){
      setNameIsEmpty(true)
      document.querySelector('.err').classList.add('open')
    }
    if(nameIsEmpty === false){
      document.querySelector('.err').classList.remove('open')
    }
  }

  return (
    <form action="submit" className="form" onSubmit={handleSubmit}>
      <div className="input-enclose">
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          id="fName"
          className="input"
        />
        <div className="err-enclose">
          {nameIsEmpty && <div className=" err err-fName">First Name Cannot Be Empty</div>}
          <div className="err miss-fName">That does not look like a name</div>
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
          <div className=" err miss-email">
            That does not look like an email
          </div>
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
          <div className="err miss-pass">
            That does not look like a Password
          </div>
        </div>
      </div>

      <button type="submit" className="btn"
      >
        Claim your free trial
      </button>
      <div className="pWrap">
        <p>By clicking the button, you are agreeing to our</p>
        <p>Terms and Services</p>
      </div>
    </form>
  );
}
