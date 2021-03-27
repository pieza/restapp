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
import Service from "../../../services/bebida.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Bebidas() {
  const service = new Service()
  const headers = ["codigo", "marca", "precio_unitario", "precio_botella", "nombre", "ingredientes", "descripcion", "tipo"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Bebidas" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/bebidas/crear">
              <Button className="btn btn-info">Nuevo Bebida</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Bebidas.layout = Admin;

export default Bebidas;
