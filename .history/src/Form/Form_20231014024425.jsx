import "./Form.css";
import { useState } from "react";
import errorIcon from '../../public/images/icon-error.svg'

export function Form() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fNameEmpty, setFNameEmpty] = useState(false);
  const [lNameEmpty, setLNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passEmpty, setPassEmpty] = useState(false);
  const [disabled, setDisabled] = useState(true)

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
    e.preventDefault();
   if(fName === ''){
    setFNameEmpty(true)
   }
   if(lName === ''){
    setLNameEmpty(true)
   }
   if(password === ''){
    setPassEmpty(true)
   }
   if(email === ''){
    setEmailEmpty(true)
    document.querySelector('.email').classList.add('input-error')
   }
   else{
    setFName('')
    setEmail('')
    setLName('')
    setPassword('')

   }
  };

  return (
    <form action="submit" className="form" onSubmit={e=>e.preventDefault()}>
      <div className="input-enclose">
        <img src={errorIcon} alt="error-icon" className="error-icon"/>
        <input
          type="text"
          placeholder="First Name"
          value={fName}
          className="input"
          onChange={(e) => handleFirstName(e)}
        />
        <div className="err-enclose">
          {fNameEmpty && (
            <div className=" err err-fName">First Name Cannot Be Empty</div>
          )}
        </div>
      </div>

      <div className="input-enclose">
        <img src={errorIcon} alt="error-icon" className="error-icon"/>
        <input
          type="text"
          placeholder="Last Name"
          value={lName}
          className="input"
          onChange={(e) => handleLastName(e)}
        />
        <div className="err-enclose">
          {lNameEmpty && (
            <div className=" err err-lName">Last Name Cannot Be Empty</div>
          )}
        </div>
      </div>

      <div className="input-enclose">
        {emailEmpty && <img src={errorIcon} alt="error-icon" className="error-icon"/>}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          className="input"
          onChange={(e) => handleEmail(e)}
        />
        <div className="err-enclose">
          {emailEmpty && (
            <div className="  err err-email">Email Cannot Be Empty</div>
          )}
          <div className=" err miss-email">
            That does not look like an email
          </div>
        </div>
      </div>

      <div className="input-enclose">
        <img src={errorIcon} alt="error-icon" className="error-icon"/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="input"
          onChange={(e) => handlePassword(e)}
        />
        <div className="err-enclose">
          {passEmpty && (
            <div className="  err err-password">
              Password Cannot Be Empty
            </div>
          )}
        </div>
      </div>

      <button type="submit" className="btn" onClick={handleSubmit}>
        Claim your free trial
      </button>
      <div className="pWrap">
        <p>By clicking the button, you are agreeing to our</p>
        <p>Terms and Services</p>
      </div>
    </form>
  );
}
