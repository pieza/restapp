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
import Service from "../../../services/marca.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Marcas() {
  const service = new Service()
  const headers = ["codigo", "nombre", "empresa", "telefono", "nacionalidad", "descripcion"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Marcas" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/marcas/crear">
              <Button className="btn btn-info">Nuevo Marca</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Marcas.layout = Admin;

export default Marcas;
