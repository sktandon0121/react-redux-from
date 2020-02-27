import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const CustomForm = props => {
  const onClickHandler = e => {
    e.preventDefault();
    let { email, name } = e.target.form;
    if (email && email.value && (name && name.value)) {
      props.onSaveData({ email: email.value, name: name.value });
      e.target.form.reset();
    }
  };
  return (
    <Row>
      <Col md={4} />
      <Col md={4}>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onClickHandler}>
            Submit
          </Button>
        </Form>
      </Col>
      <Col md={4} />
    </Row>
  );
};

export default CustomForm;
