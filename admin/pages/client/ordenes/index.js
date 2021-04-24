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
import Service from "../../../services/factura.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";
import Client from "../../../layouts/Client";

function Ordenes() {
  const service = new Service()
  const headers = ["codigo", "monto", "cliente", "fecha"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Ordenes" 
              service={service} 
              doEdit={false}
              doDelete={false}
              doDetails={true} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/client/ordenes/crear">
              <Button className="btn btn-info">Nueva Orden</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Ordenes.layout = Client;

export default Ordenes;
