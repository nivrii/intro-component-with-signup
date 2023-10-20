/* eslint-disable react/prop-types */
function Success({userArray}) {
    const {lName, fName, email} = userArray
  return (
    <div className="close success">
        <h4>Hello {fName} {lName}</h4>
        <p>we have sent a confirmation email to <strong>{email}</strong> .</p>
        <p>If this was not you, click to go back <button className="back">Go Back</button></p>
    </div>
  )
}

export default Success