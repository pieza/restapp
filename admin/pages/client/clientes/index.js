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
import Service from "../../../services/cliente.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";
import Client from "../../../layouts/Client";

function Clientes() {
  const service = new Service()
  const headers = ["codigo", "nombre", "fecha_llegada", "reservacion", "nombre", "mesa", "barra", "restaurante"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Clientes" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/client/clientes/crear">
              <Button className="btn btn-info">Nuevo Cliente</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Clientes.layout = Client;

export default Clientes;
