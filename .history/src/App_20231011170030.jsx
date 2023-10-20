import { Footer } from './Footer/Footer';
import { Form } from './Form/Form';
import { Card } from './Card/Card';
import { Content } from './Content/Content';
import "./App.css";

function App() {
  
  return (
    <>
      <div className="container">
        <Content     />
        <Card     />
        <Form     />
      </div>
      <Footer    />
    </>
  );
}

export default App;
