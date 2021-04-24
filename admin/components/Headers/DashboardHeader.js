import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

function  DashboardHeader() {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "100px",
          backgroundImage:
            "url(" + require("assets/img/theme/fondo.jpeg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >



  
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Centro de Ayuda</h1>
              <p className="text-white mt-0 mb-0">
                Encontrá acá información útil sobre las aplicaciones de Divudicci y todos sus restaurantes.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default  DashboardHeader;
