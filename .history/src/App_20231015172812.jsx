import Container from "./Container/Container";
import { Footer } from "./Footer/Footer";

import "./App.css";
import { useState } from "react";

function App() {
  const [userArray, setUserArray] = useState({});
  return (
    <div className="UI">
      <Container userArray={userArray} setUserArray={setUserArray} />
      <Footer />
    </div>
  );
}

export default App;
