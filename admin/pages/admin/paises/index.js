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
import PaisService from "../../../services/pais.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Paises() {
  const service = new PaisService()
  const headers = ["nombre", "codigo"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable headers={headers} title="Paises" service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/paises/crear">
              <Button className="btn btn-info">Nuevo Pais</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Paises.layout = Admin;

export default Paises;
