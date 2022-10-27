import '../componentsCss/form.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const FormInput = () => {
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
  <div className="container-sm "id="myDiv">
	<Form className="size" noValidate validated={validated} onSubmit={handleSubmit} id="form">
    <Form.Group as={Col} md="0" controlId="validationCustom01">
      <Form.Label>First name</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter First name"
        defaultValue=""
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid First name.
      </Form.Control.Feedback>
    </Form.Group>
    <br/>
    <Form.Group as={Col} md="0" controlId="validationCustom02">
      <Form.Label>Contact</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter Contact info"
        defaultValue=""
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid Last name.
      </Form.Control.Feedback>
    </Form.Group>
    <br/>
    <Form.Group as={Col} md="0" controlId="validationCustom01">
      <Form.Label>Email</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Enter Email address"
        defaultValue=""
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid Email.
      </Form.Control.Feedback>
    </Form.Group>
    <br/>
    <Form.Group as={Col} md="0" controlId="validationCustom02">
      <Form.Label>Age</Form.Label>
      <Form.Control
        required
        type="number"
        number="true"
        placeholder="Enter Age"
        defaultValue=""
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid Age.
      </Form.Control.Feedback>
    </Form.Group>
    <br/>
    <Form.Group as={Col} md="0" controlId="validationCustom02">
      <Form.Label>Date of Performance</Form.Label>
      <Form.Control
        required
        type="date"
        date="true"
        placeholder=""
        defaultValue=""
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid Contact info.
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

export default FormInput;