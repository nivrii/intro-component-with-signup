/* eslint-disable react/prop-types */
import "./Success.css";
import success from "../../../assets/images/icon-success.svg";
function Success({ userArray }) {
  const { lName, fName, email } = userArray;
  return (
    <div className="close success">
      <img src={success} alt="success" />
      <h4>
        Hello{" "}
        <span>
          {fName} {lName}
        </span>
      </h4>
      <p>
        We have sent a confirmation email to <strong>{email}</strong> .
      </p>
      <p>
        If this was not you, click to go back{" "}
        <br />
        <button className="back">Go Back</button>
      </p>
    </div>
  );
}

export default Success;
