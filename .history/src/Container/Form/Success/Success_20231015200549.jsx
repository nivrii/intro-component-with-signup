/* eslint-disable react/prop-types */
import './Success.css'
import success from '../../../public/images/icon-success.svg'
function Success({userArray}) {
    const {lName, fName, email} = userArray
  return (
    <div className="close success">
      <img src={success} alt="" />
        <h4>Hello <span>{fName} {lName}</span></h4>
        <p>we have sent a confirmation email to <strong>{email}</strong> .</p>
        <p>If this was not you, click to go back <button className="back">Go Back</button></p>
    </div>
  )
}

export default Success