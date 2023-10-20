import "./Form.css";
export function Form() {
  return (
    <form action="submit" className="form">
      <input
        type="text"
        placeholder="First Name"
        name="fName"
        className="input"
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lName"
        className="input"
      />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="input"
      />
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
