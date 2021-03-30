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
import Service from "../../../services/especialidad.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Especialidades() {
  const service = new Service()
  const headers = ["codigo", "nombre", "precio", "detalle"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Especialidades" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/especialidades/crear">
              <Button className="btn btn-info">Nueva Especialidad</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Especialidades.layout = Admin;

export default Especialidades;
