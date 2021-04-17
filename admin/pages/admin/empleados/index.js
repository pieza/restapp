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
import Service from "../../../services/empleado.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Empleados() {
  const service = new Service()
  const headers = ["codigo", "nombre", "apellidos", "telefono_1", "telefono_2", "puesto", "restaurante"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Empleados" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/empleados/crear">
              <Button className="btn btn-info">Nuevo Empleado</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Empleados.layout = Admin;

export default Empleados;
