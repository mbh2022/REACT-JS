import logo from "./logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import "./App.css";
import { Button } from "bootstrap";

function app() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <a href="/">
              <img src="./assets/img/cherche-logo.jpg" alt="logo" height={60} />
            </a>
          </Navbar.Brand>
          http://localho
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
          </Nav>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>cherche produit</Form.Label>
              <Form.Control type="search" placeholder="enter search" />
              <Form.Text className="text-muted">
                Tapper votre recherche ici
              </Form.Text>
            </Form.Group>
          </Form>
        </Container>
      </Navbar>
    </>
  );
}

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default app;
