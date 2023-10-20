import "./Form.css";
import { useState } from "react";

export function Form() {
  const [value, setValue] = useState(0);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});
  
  const validateInput = (name, value) => {
    // Implement your validation logic here
    // For example, you can check if the input is empty or has the correct format
    if (name === "fName") {
      if (value === "") {
        return "First Name Cannot Be Empty";
      }
    } else if (name === "lName") {
      if (value === "") {
        return "Last Name Cannot Be Empty";
      }
    } else if (name === "email") {
      if (value === "") {
        return "Email Cannot Be Empty";
      } else if (!isValidEmail(value)) {
        return "That does not look like an email";
      }
    } else if (name === "password") {
      if (value === "") {
        return "Password Cannot Be Empty";
      }
    }
    
    return null; // No error
  };
  
  const isValidEmail = (email) => {
    // You can implement your email validation logic here
    // For simplicity, we are not implementing it in this example.
    return true; // Replace with actual validation logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);

    // Validate each input field and update errors state
    const newErrors = {};
    for (const [name, value] of formData.entries()) {
      const error = validateInput(name, value);
      if (error) {
        newErrors[name] = error;
      }
    }

    if (Object.keys(newErrors).length === 0) {
      // If there are no errors, set the user and reset the form
      setUser(newUser);
      e.currentTarget.reset();
    } else {
      setErrors(newErrors);
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
        />
        <div className="err-enclose">
          {errors.fName && <div className="err err-fName">{errors.fName}</div>}
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
          {errors.lName && <div className="err err-lName">{errors.lName}</div>}
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
          {errors.email && <div className="err err-email">{errors.email}</div>}
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
          {errors.password && <div className="err err-password">{errors.password}</div>}
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
