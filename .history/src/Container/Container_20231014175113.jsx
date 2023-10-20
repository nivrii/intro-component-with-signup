import { Form } from "./Form/Form";
import { Card } from "./Card/Card";
import { Content } from "./Content/Content";
import { Success } from "./Success";
import React from "react";

const MyContext = React.createContext();
const Container = () => {
  const userArray = [];
  return(
  <>
  <div className="container">
    <Content />
    <Card />
    <Form userArray={userArray} />
  </div>;
  <MyContext.Provider value={userArray}>
    <Success />
    </MyContext.Provider>;
  </>
  )
};
export default Container;
