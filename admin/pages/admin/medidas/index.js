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
import Service from "../../../services/medida.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Medidas() {
  const service = new Service()
  const headers = ["codigo", "detalle", "simbologia", "unidad_medida"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Medidas" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/medidas/crear">
              <Button className="btn btn-info">Nuevo Medida</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Medidas.layout = Admin;

export default Medidas;
