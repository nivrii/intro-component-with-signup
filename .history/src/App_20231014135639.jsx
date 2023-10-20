import { Footer } from './Footer/Footer';
import { Form } from './Form/Form';
import { Card } from './Card/Card';
import { Content } from './Content/Content';
import "./App.css";

function App() {

  return (
    <div className='UI'>
      <div className="container">
        <Content     />
        <Card     />
        <Form   />
      </div>
      <div className="success">
        <h4>Thank you for signing up!</h4>
        <p>
          
        </p>
      </div>
      <Footer    />
    </div>
  );
}

export default App;
