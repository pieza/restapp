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
import Service from "../../../services/proveedor.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Proveedores() {
  const service = new Service()
  const headers = ["codigo", "nombre", "apellidos", "cedula", "correo", "fecha_ingreso"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Proveedores" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/proveedores/crear">
              <Button className="btn btn-info">Nuevo Proveedor</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Proveedores.layout = Admin;

export default Proveedores;
