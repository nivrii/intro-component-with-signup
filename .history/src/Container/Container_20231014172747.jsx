import { Form } from './Form/Form';
import { Card } from './Card/Card';
import { Content } from './Content/Content';
import { useState } from 'react';
export function Container() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return <div className="container">
        <Content />
        <Card />
        <Form 
        fName={fName}
        lName={lName}
        email={email}
        password={password}
        setFName={setFName}
        setLName={setLName}
        setEmail={setEmail}
        setPassword={setPassword}/>
      </div>;
}
  