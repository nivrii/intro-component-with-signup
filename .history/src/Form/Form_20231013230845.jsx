import "./Form.css";
import { useState } from "react";

export function Form() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const [fNameEmpty, setFNameEmpty] = useState(true)

  const handleFirstName = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === ""
      ? document.querySelector(".err-fName").classList.add("open")
      : document.querySelector(".err-fName").classList.remove("open");
  };
  const handleLastName = () => {};
  const handleEmail = () => {};
  const handlePassword = () => {};
  const handleSubmit = () => {
    

    }
      
  };

  return (
    <form action="submit" className="form" onSubmit={handleSubmit}>
      <div className="input-enclose">
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          id="fName"
          className="input"
          onChange={(e) => handleFirstName(e)}
        />
        <div className="err-enclose">
          <div className=" err err-fName">First Name Cannot Be Empty</div>
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
