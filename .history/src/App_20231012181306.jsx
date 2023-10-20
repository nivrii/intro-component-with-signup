import { Footer } from './Footer/Footer';
import { Form } from './Form/Form';
import { Card } from './Card/Card';
import { Content } from './Content/Content';
import "./App.css";

function App() {
  const userArray = []
  return (
    <>
      <div className="container">
        <Content     />
        <Card     />
        <Form    userArray={userArray} />
      </div>
      <div className="success">
        <h4>Thank you for signing up!</h4>
        <p>
          
        </p>
      </div>
      <Footer    />
    </>
  );
}

export default App;
