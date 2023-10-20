import { Footer } from './Footer';
import { Form } from './Form';
import { Card } from './Card';
import { Content } from './Content';
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
