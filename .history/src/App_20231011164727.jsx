import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="content">
        <h4>Learn to code by watching others</h4>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="card">
        <div className="card__content">
          <h2>Try it free 7 days</h2>
          <p>then $20/mo. thereafter</p>
        </div>
      </div>
      <form action="submit">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">Claim your free trial</button>
        <p>By clicking the button, you are agreeing to our</p>
        <p>Terms and Services</p>
      </form>
    </div>
  );
}

export default App;
