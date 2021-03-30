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
import Service from "../../../services/comestible.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Comestibles() {
  const service = new Service()
  const headers = ["codigo", "nombre", "descripcion", "cantidad", "marca", "restaurante", "clase", "linea", "precio"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Comestibles" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/comestibles/crear">
              <Button className="btn btn-info">Nuevo Comestible</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Comestibles.layout = Admin;

export default Comestibles;
