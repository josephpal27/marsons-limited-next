"use client"

import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import "./Navbar.css";

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/" className="nav-brand">
        <img src={logo} alt="logo" loading="eager" />
      </Navbar.Brand>

      {/* Toggle button opens Offcanvas */}
      <Navbar.Toggle onClick={handleShow} />

      <Navbar.Offcanvas
        show={show}
        onHide={handleClose}
        id="offcanvasNavbar-expand-lg"
        aria-labelledby="offcanvasNavbarLabel-expand-lg"
        placement="start"
      >
        <Offcanvas.Header>
          <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
            <img src={logo} alt="logo" className="offCanvasLogo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link as={NavLink} to="/" onClick={handleClose}>
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleClose}>
              ABOUT
            </Nav.Link>
            {/* Bootstrap Dropdown */}
            <NavDropdown title="PRODUCTS" id="navbarDropdown">
              <NavDropdown.Item as={NavLink} to="/products/distribution-transformers" onClick={handleClose}>
                Distribution Transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/power-transformers" onClick={handleClose}>
                Power Transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/furnace-duty-transformers" onClick={handleClose}>
                Furnace Duty Transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/dry-type-transformers" onClick={handleClose}>
                Dry Type Transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/pad-mounted-transformers" onClick={handleClose}>
                PAD Mounted Transformers
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={NavLink} to="/products/cast-resin-transformers" onClick={handleClose}>
                Cast resin transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/solar-transformers" onClick={handleClose}>
                Solar transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/products/instrumental-transformers" onClick={handleClose}>
                Instrumental transformers
              </NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link as={NavLink} to="/clientele" onClick={handleClose}>
              CLIENTELE
            </Nav.Link> */}
            {/* Bootstrap Dropdown */}
            <NavDropdown title="INVESTOR CORNER" id="navbarDropdown">
              <NavDropdown.Item as={NavLink} to="/investor-corner/financials" onClick={handleClose}>
                Financials
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/investor-corner/regulation" onClick={handleClose}>
                Regulation 46(2)
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/investor-corner/corporate-governance" onClick={handleClose}>
                Corporate Governance
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/investor-corner/shareholding-pattern" onClick={handleClose}>
                Shareholding Pattern
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/investor-corner/notices-and-results" onClick={handleClose}>
                Notices & Results
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/investor-corner/policies" onClick={handleClose}>
                Policies
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/investor-corner/unclaimed-dividend" onClick={handleClose}>
                Unclaimed Dividend
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/investor-corner/contact-details" onClick={handleClose}>
                Contact Details
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link as={NavLink} to="/csr" onClick={handleClose}>
              CSR
            </Nav.Link>
            <Nav.Link as={NavLink} to="/career" onClick={handleClose}>
              CAREER
            </Nav.Link> */}
            <Nav.Link as={NavLink} to="/contact" onClick={handleClose}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default MyNavbar;
