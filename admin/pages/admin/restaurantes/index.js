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
import Service from "../../../services/restaurante.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Restaurantes() {
  const service = new Service()
  const headers = ["codigo", "nombre", "activo", "direccion", "aforo", "telefono", "especialidad"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Restaurantes" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/restaurantes/crear">
              <Button className="btn btn-info">Nuevo Restaurante</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Restaurantes.layout = Admin;

export default Restaurantes;
