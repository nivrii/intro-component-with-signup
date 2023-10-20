/* eslint-disable react/prop-types */
import "./Success.css";
import success from "../../../assets/images/icon-success.svg";
function Success({ userArray }) {
  const { lName, fName, email } = userArray;
  const goBack =()=>{
    document.querySelector("form").classList.remove("close");
      document.querySelector(".card__content").classList.remove("close");
      document.querySelector(".content").classList.remove("close");
      document.querySelector(".success").classList.add("close");
  }
  return (
    <div className="close success">
      <img src={success} alt="success" />
      <h4>
        Hello{" "}
        <span className="span__name">
          {fName} {lName}
        </span>
      </h4>
      <p>
        We have sent a confirmation email to{" "}
        <span className="span__email">{email}</span> .
      </p>
      <p>
        Thank you for subscribing, <button className="back" onClick={goBack}>click</button> to go back{" "}
        <br />
      </p>
    </div>
  );
}

export default Success;
