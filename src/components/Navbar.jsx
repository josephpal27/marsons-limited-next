"use client"

import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

const MyNavbar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={Link} href="/" className="nav-brand">
        <img src="/images/logo/logo.png" alt="Marsons Limited" loading="eager" />
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
            <img src="/images/logo/logo.png" alt="Marsons Logo" className="offCanvasLogo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1">
            <Nav.Link as={Link} href="/" onClick={handleClose} className={`${pathname === "/" ? "active" : ""}`}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} href="/about" onClick={handleClose} className={`${pathname === "/about" ? "active" : ""}`}>
              ABOUT
            </Nav.Link>
            {/* Bootstrap Dropdown */}
            <NavDropdown title="PRODUCTS" id="navbarDropdown">
              <NavDropdown.Item as={Link} href="/products/distribution-transformers" onClick={handleClose} className={`${pathname === "/products/distribution-transformers" ? "active" : ""}`}>
                Distribution Transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/products/power-transformers" onClick={handleClose} className={`${pathname === "/products/power-transformers" ? "active" : ""}`}>
                Power Transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/products/furnace-duty-transformers" onClick={handleClose} className={`${pathname === "/products/furnace-duty-transformers" ? "active" : ""}`}>
                Furnace Duty Transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/products/dry-type-transformers" onClick={handleClose} className={`${pathname === "/products/dry-type-transformers" ? "active" : ""}`}>
                Dry Type Transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/products/pad-mounted-transformers" onClick={handleClose} className={`${pathname === "/products/pad-mounted-transformers" ? "active" : ""}`}>
                PAD Mounted Transformers
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={NavLink} href="/products/cast-resin-transformers" onClick={handleClose} className={`${pathname === "/products/cast-resin-transformers" ? "active" : ""}`}>
                Cast resin transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/products/solar-transformers" onClick={handleClose} className={`${pathname === "/products/solar-transformers" ? "active" : ""}`}>
                Solar transformers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/products/instrumental-transformers" onClick={handleClose} className={`${pathname === "/products/instrumental-transformers" ? "active" : ""}`}>
                Instrumental transformers
              </NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link as={NavLink} href="/clientele" onClick={handleClose} className={`${pathname === "/clientele" ? "active" : ""}`}>
              CLIENTELE
            </Nav.Link> */}
            {/* Bootstrap Dropdown */}
            <NavDropdown title="INVESTOR CORNER" id="navbarDropdown">
              <NavDropdown.Item as={Link} href="/investor-corner/financials" onClick={handleClose} className={`${pathname === "/investor-corner/financials" ? "active" : ""}`}>
                Financials
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/investor-corner/regulation" onClick={handleClose} className={`${pathname === "/investor-corner/regulation" ? "active" : ""}`}>
                Regulation 46(2)
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/investor-corner/corporate-governance" onClick={handleClose} className={`${pathname === "/investor-corner/corporate-governance" ? "active" : ""}`}>
                Corporate Governance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/investor-corner/shareholding-pattern" onClick={handleClose} className={`${pathname === "/investor-corner/shareholding-pattern" ? "active" : ""}`}>
                Shareholding Pattern
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/investor-corner/notices-and-results" onClick={handleClose} className={`${pathname === "/investor-corner/notices-and-results" ? "active" : ""}`}>
                Notices & Results
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/investor-corner/policies" onClick={handleClose} className={`${pathname === "/investor-corner/policies" ? "active" : ""}`}>
                Policies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/investor-corner/unclaimed-dividend" onClick={handleClose} className={`${pathname === "/investor-corner/unclaimed-dividend" ? "active" : ""}`}>
                Unclaimed Dividend
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/investor-corner/contact-details" onClick={handleClose} className={`${pathname === "/investor-corner/contact-details" ? "active" : ""}`}>
                Contact Details
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link as={NavLink} href="/csr" onClick={handleClose} className={`${pathname === "/csr" ? "active" : ""}`}>
              CSR
            </Nav.Link>
            <Nav.Link as={NavLink} href="/career" onClick={handleClose} className={`${pathname === "/career" ? "active" : ""}`}>
              CAREER
            </Nav.Link> */}
            <Nav.Link as={Link} href="/contact" onClick={handleClose} className={`${pathname === "/contact" ? "active" : ""}`}>
              CONTACT
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default MyNavbar;
