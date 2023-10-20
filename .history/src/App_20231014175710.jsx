import { Success } from "./Container/Success";
import Container from "./Container/Container";
import { Footer } from "./Footer/Footer";

import "./App.css";
import { useState } from "react";

function App() {
  const [userArray, setUserArray] = useState({});
  return (
    <div className="UI">
      <Container userArray={userArray} setUserArray={setUserArray} />
      <Success userArray={userArray} />
      <Footer />
    </div>
  );
}

export default App;
