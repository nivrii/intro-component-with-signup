/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import "./Form.css";
import Success from "./Success/Success";
import { useEffect, useState } from "react";
import errorIcon from "../../../public/images/icon-error.svg";

export function Form({ userArray, setUserArray }) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fNameEmpty, setFNameEmpty] = useState(false);
  const [lNameEmpty, setLNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailMatch, setEmailMatch] = useState(false);
  const [passEmpty, setPassEmpty] = useState(false);

  const handleFirstName = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === "" ? setFNameEmpty(true) : setFNameEmpty(false);
    setFName(value);
  };
  const handleLastName = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === "" ? setLNameEmpty(true) : setLNameEmpty(false);
    setLName(value);
  };
  const handleEmail = (e) => {
    e.preventDefault();
    let value = e.target.value.trim();
    const regex =
      /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
      document.querySelector(".email-input").classList.add("input-error");
      setEmailEmpty(true);
    } else {
      setEmailEmpty(false);
    }

    if (!value.match(regex)) {
      document.querySelector(".email-input").classList.add("input-error");
      setEmailMatch(true);
    } else {
      setEmailMatch(false);
    }
    setEmail(value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value === "" ? setPassEmpty(true) : setPassEmpty(false);

    setPassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fName === "") {
      setFNameEmpty(true);
      document.querySelector(".fName-input").classList.add("input-error");
      return;
    }
    if (lName === "") {
      setLNameEmpty(true);
      document.querySelector(".lName-input").classList.add("input-error");
      return;
    }
    if (email === "") {
      setEmailEmpty(true);
      document.querySelector(".email-input").classList.add("input-error");
      return;
    }
    if (!emailMatch) {
      return;
    }
    if (password === "") {
      setPassEmpty(true);
      document.querySelector(".password-input").classList.add("input-error");
      return;
    } else {
      setFName("");
      setEmail("");
      setLName("");
      setPassword("");
      document.querySelector("form").classList.add("close");
      document.querySelector(".card__content").classList.add("close");
      document.querySelector(".content").classList.add("close");
      document.querySelector(".success").classList.remove("close");
    }

    setUserArray({
      fName: fName,
      lName: lName,
      email: email,
    });
  };
  useEffect(() => {
    console.log(userArray);
  }, [userArray]);

  return (
    <>
      <form
        action="submit"
        className="form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="input-enclose">
          {fNameEmpty && (
            <img src={errorIcon} alt="error-icon" className="error-icon" />
          )}
          <input
            type="text"
            placeholder="First Name"
            value={fName}
            name={fName}
            className="input fName-input"
            onChange={(e) => handleFirstName(e)}
            onKeyDown={() =>
              document
                .querySelector(".fName-input")
                .classList.remove("input-error")
            }
          />
          <div className="err-enclose">
            {fNameEmpty && (
              <div className=" err err-fName">First Name Cannot Be Empty</div>
            )}
          </div>
        </div>

        <div className="input-enclose">
          {lNameEmpty && (
            <img src={errorIcon} alt="error-icon" className="error-icon" />
          )}
          <input
            type="text"
            placeholder="Last Name"
            value={lName}
            name={lName}
            className="input lName-input"
            onChange={(e) => handleLastName(e)}
            onKeyDown={() =>
              document
                .querySelector(".lName-input")
                .classList.remove("input-error")
            }
          />
          <div className="err-enclose">
            {lNameEmpty && (
              <div className=" err err-lName">Last Name Cannot Be Empty</div>
            )}
          </div>
        </div>

        <div className="input-enclose">
          {emailEmpty && (
            <img src={errorIcon} alt="error-icon" className="error-icon" />
          )}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            name={email}
            className="input email-input"
            onChange={(e) => handleEmail(e)}
            onKeyUp={(e) => handleEmail(e)}
            onKeyDown={() =>
              document
                .querySelector(".email-input")
                .classList.remove("input-error")
            }
          />
          <div className="err-enclose">
            {emailEmpty && (
              <div className="err err-email">Email Cannot Be Empty</div>
            )}
            {emailMatch && (
              <div className="err miss-email">
                That does not look like an email
              </div>
            )}
          </div>
        </div>

        <div className="input-enclose">
          {passEmpty && (
            <img src={errorIcon} alt="error-icon" className="error-icon" />
          )}
          <input
            type="password"
            placeholder="Password"
            value={password}
            name={password}
            className="input password-input"
            onChange={(e) => handlePassword(e)}
            onKeyDown={() =>
              document
                .querySelector(".password-input")
                .classList.remove("input-error")
            }
          />
          <div className="err-enclose">
            {passEmpty && (
              <div className="  err err-password">Password Cannot Be Empty</div>
            )}
          </div>
        </div>

        <button type="submit" className="btn" onClick={(e) => handleSubmit(e)}>
          Claim your free trial
        </button>
        <div className="pWrap">
          <p>By clicking the button, you are agreeing to our</p>
          <p>Terms and Services</p>
        </div>
      </form>
      <Success userArray={userArray} />
    </>
  );
}
