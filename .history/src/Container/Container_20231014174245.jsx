import { Form } from './Form/Form';
import { Card } from './Card/Card';
import { Content } from './Content/Content';
 const Container = () => {
  const userArray = []
  return <div className="container">
        <Content />
        <Card />
        <Form userArray={userArray}/>
      </div>;
}
export default Container
  