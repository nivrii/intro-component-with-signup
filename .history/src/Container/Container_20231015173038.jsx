/* eslint-disable react/prop-types */
import { Form } from "./Form/Form";
import { Card } from "./Card/Card";
import { Content } from "./Content/Content";

const Container = (props) => {
  const {userArray, setUserArray} = props
  return (
    <>
      <div className="container">
        <Content />
        <Card />
        <Form userArray={userArray} setUserArray={setUserArray}/>
      </div>
      <div className="close success">

      </div>
      </>
  );
};
export default Container;
