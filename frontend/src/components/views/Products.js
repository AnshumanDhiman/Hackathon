import React from "react";

// react-bootstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Form
} from "react-bootstrap";
import './Dashboard.css';


function Products() {
  return (
    <>
      <Container fluid>
      <Row>
      <Col md="6">
      <Button
        className="btn-fill pull-right"
        type="submit"
        variant="info"
        >
        Request For Product Deletion
        </Button> 
      </Col>
      <Col md="6">
      <Button
        className="btn-fill pull-right"
        type="submit"
        variant="info"
        >
        Request for Service Upgradation
        </Button> 
      </Col>
      </Row>
      <br/>
      <br/>
      <Row>
      <h1>Product 1</h1>
       
        
      </Row>
      <br/>
      <br/>
      <Row>
      <Col className="px-3">
      <Form.Group>
        <label>Description</label>
        <Form.Control
        cols="80"
        defaultValue="Dal Roti and Sabzi only for Rs.30."
        placeholder="Here can be your description"
        rows="4"
        as="textarea"
        ></Form.Control>
        </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="px-3" md="3">
        <Form.Group>
        <label>Price</label>
        <Form.Control
        defaultValue="Rs.30"
        placeholder="Price"
        type="text"
        ></Form.Control>
        </Form.Group>
        </Col>
      </Row>
      <Row>
      <Col className="px-3" md="3">
      <Button
        className="btn-fill pull-right"
        type="submit"
        variant="info"
        >
        Update Profile
        </Button> 
        </Col>
      </Row>
      
      </Container>

      <Container fluid>
      <br/>
      <br/>
      <Row>
      <h1>Product 2</h1>
 
        
      </Row>
      <br/>
      <br/>
      <Row>
      <Col className="px-3">
      <Form.Group>
        <label>Description</label>
        <Form.Control
        cols="80"
        defaultValue="Dal Roti and Sabzi only for Rs.30"
        placeholder="Here can be your description"
        rows="4"
        as="textarea"
        ></Form.Control>
        </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="px-3" md="3">
        <Form.Group>
        <label>Price</label>
        <Form.Control
        defaultValue="Rs.30"
        placeholder="Price"
        type="text"
        ></Form.Control>
        </Form.Group>
        </Col>
      </Row>
      <Row>
      <Col className="px-3" md="3">
      <Button
        className="btn-fill pull-right"
        type="submit"
        variant="info"
        >
        Update Profile
        </Button> 
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default Products;
