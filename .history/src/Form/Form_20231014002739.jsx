import "./Form.css";
import { useEffect, useState } from "react";

export function Form() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [fNameEmpty, setFNameEmpty] = useState(false);
  const [lNameEmpty, setLNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passEmpty, setPassEmpty] = useState(false);

  const handleFirstName = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === "" ? setFNameEmpty(true) : setFNameEmpty(false);
    setFName(value)
  };
  const handleLastName = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === "" ? setLNameEmpty(true) : setLNameEmpty(false);
    setLName(value)
  };
  const handleEmail = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === "" ? setEmailEmpty(true) : setEmailEmpty(false);
    setEmail(value)
  };
  const handlePassword = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === "" ? setPassEmpty(true) : setPassEmpty(false);
    setPassword(value)
  };
  const handleSubmit = (e) => {
    e.preventDefault()
   if(fName === ''){
    setFNameEmpty(true)
   }
   if(lName === ''){
    setFNameEmpty(true)
   }
   if(password === ''){
    setFNameEmpty(true)
   }
   if(email === ''){
    setFNameEmpty(true)
   }
  };

  return (
    <form action="submit" className="form" onScroll={(e)=>handleSubmit(e)}>
      <div className="input-enclose">
        <input
          type="text"
          placeholder="First Name"
          name="fName"
          id="fName"
          className="input"
          onKeyUp={(e) => handleFirstName(e)}
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
          onKeyUp={(e) => handleLastName(e)}
        />
        <div className="err-enclose">
          {lNameEmpty && (
            <div className="open err err-lName">Last Name Cannot Be Empty</div>
          )}
        </div>
      </div>

      <div className="input-enclose">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          id="email"
          className="input"
          onKeyUp={(e) => handleEmail(e)}
        />
        <div className="err-enclose">
          {emailEmpty && (
            <div className="open  err err-email">Email Cannot Be Empty</div>
          )}
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
          onKeyUp={(e) => handlePassword(e)}
        />
        <div className="err-enclose">
          {passEmpty && (
            <div className="open  err err-password">
              Password Cannot Be Empty
            </div>
          )}
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
