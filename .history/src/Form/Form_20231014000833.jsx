import "./Form.css";
import { useEffect, useState } from "react";

export function Form() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [fNameEmpty, setFNameEmpty] = useState(true);
  const [lNameEmpty, setLNameEmpty] = useState(true);
  const [emailEmpty, setEmailEmpty] = useState(true);
  const [passEmpty, setPassEmpty] = useState(true);

  const handleFirstName = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === "" ? setFNameEmpty(true) : setFNameEmpty(false);

    // fNameEmpty
    //   ? document.querySelector(".err-fName").classList.add("open")
    //   : document.querySelector(".err-fName").classList.remove("open");
  };
  const handleLastName = () => {};
  const handleEmail = () => {};
  const handlePassword = () => {};
  const handleSubmit = () => {
    if (fNameEmpty || lNameEmpty || emailEmpty || passEmpty) {
      alert("All fields must be filled");
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
          onKeyDown={(e) => handleFirstName(e)}
        />
        <div className="err-enclose">
          {fNameEmpty && (
            <div className="open err err-fName">First Name Cannot Be Empty</div>
          )}
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
