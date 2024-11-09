import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import { useState } from "react";
import Cart from "./components/Cart";

function AppNavbar({ toggleForm, showForm }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          The Generics
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Button variant="outline-success" onClick={toggleForm}>
          Cart
        </Button>
        {showForm && <Cart onClose={toggleForm} />}
      </Container>
    </Navbar>
  );
}

function App() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <AppNavbar toggleForm={toggleForm} showForm={showForm} />

      <Container className="my-5">
        <Card className="text-center p-4 bg-light">
          <Card.Body>
            <Card.Title>
              <h1>Welcome to The Generics</h1>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
