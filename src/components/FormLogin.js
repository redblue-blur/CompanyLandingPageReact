import '../componentsCss/form.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const FormLogin = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
  <>
  <div className="container-sm ">
	<Form className="size" noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Group as={Col} md="0" controlId="validationCustom01">
      <Form.Label>Email Address</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter Email address"
        defaultValue="abc@gmail.com"
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid Email.
      </Form.Control.Feedback>
    </Form.Group>
    <br/>
    <Form.Group as={Col} md="0" controlId="validationCustom02">
      <Form.Label>Password</Form.Label>
      <Form.Control
        required
        type="password"
        placeholder="Enter Password"
        defaultValue=""
      />
      <Form.Control.Feedback type="invalid">
        Wrong Password.
      </Form.Control.Feedback>
    </Form.Group>
    <br/>
    <Button type="submit" className="btn btn-success">Submit</Button>
    </Form>
    <br/>
    </div>
    </>
    )
};

export default FormLogin;