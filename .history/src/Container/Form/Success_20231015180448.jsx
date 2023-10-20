/* eslint-disable react/prop-types */

function Success({userArray}) {
    const {lName, fName, email} = userArray
  return (
    <div className="close success">
        <h4>Hello {fName} {lName}</h4>
        <p>we`&apos`ve sent a confirmation email to {email}.</p>
        <p>If this wasn`&apos`nt you, click to go back <button className="back">Go Back</button></p>
    </div>
  )
}

export default Success