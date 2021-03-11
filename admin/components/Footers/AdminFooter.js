/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://www.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Divudici
            </a>
          </div>
        </Col>

        <Col xl="6">
          
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
