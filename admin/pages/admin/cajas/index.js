import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import Service from "../../../services/caja.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Cajas() {
  const service = new Service()
  const headers = ["codigo", "descripcion", "fecha", "entrada", "apertura", "cierre", "restaurante"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Cajas" 
              service={service} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

Cajas.layout = Admin;

export default Cajas;
