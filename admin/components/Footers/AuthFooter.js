/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function Login() {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.google.com"
                  target="_blank"
                >
                  Divudici
                </a>
              </div>
            </Col>
            <Col xl="6">
            
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Login;
