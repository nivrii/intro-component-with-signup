import { Form } from './Container/Form/Form';
import { Card } from './Container/Card/Card';
import { Content } from './Content/Content';
export function Container() {
  return <div className="container">
        <Content />
        <Card />
        <Form />
      </div>;
}
  