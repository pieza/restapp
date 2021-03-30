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
import Service from "../../../services/mesa.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Mesas() {
  const service = new Service()
  const headers = ["codigo", "sillas", "estado", "numero"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Mesas" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/mesas/crear">
              <Button className="btn btn-info">Nuevo Mesa</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Mesas.layout = Admin;

export default Mesas;
