import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Footer from "./Component/Footer/Footer";
import Home from "./Page/Home";
import JoinUs from "./Page/JoinUs";
import ContactUs from "./Page/ContactUs";
import StallList from "./Page/StallList";

export default function App() {
  return (
    <Container>
      <Router>
        <Navbar expand="lg" style={{ backgroundColor: "#fa5b5a" }}>
          <Container className="navBarContent">
            <Navbar.Brand
              href="#home"
              style={{ fontWeight: "500", color: "#ffffff" }}
            >
              ABC Brickworks<br></br>Food Center
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="/"
                  style={{ fontWeight: "500", color: "#ffffff" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/blog"
                  style={{ fontWeight: "500", color: "#ffffff" }}
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  href="/stall-info"
                  style={{ fontWeight: "500", color: "#ffffff" }}
                >
                  Stall Info
                </Nav.Link>
                <Nav.Link
                  href="/join-us"
                  style={{ fontWeight: "500", color: "#ffffff" }}
                >
                  Join Us
                </Nav.Link>
                <Nav.Link
                  href="/contact-us"
                  style={{ fontWeight: "500", color: "#ffffff" }}
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/stall-info">
            <StallList />
          </Route>
          <Route path="/join-us">
            <JoinUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </Container>
  );
}

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <p>Coming Soon.....</p>
    </div>
  );
}

/*


      <div>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/stall-info">Stall Info</Link>
          </li>
          <li>
            <Link to="/join-us">Join Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>


        
          <Nav fill variant="tabs">
          <Navbar.Brand href="#home">ABC Bricks Food Center</Navbar.Brand>

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/stall-info">Stall Info</Nav.Link>
            <Nav.Link href="/join-us">Join Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>




*/
