/* eslint-disable react/prop-types */
import { Form } from "./Form/Form";
import { Card } from "./Card/Card";
import { Content } from "./Content/Content";

const Container = (props) => {
  const { userArray, setUserArray } = props;
  return (
    <div className="container">
      <Content />
      <div className="media__container">
        <Card />
        <Form userArray={userArray} setUserArray={setUserArray} />
      </div>
    </div>
  );
};
export default Container;
