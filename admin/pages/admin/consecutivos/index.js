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
import Service from "../../../services/consecutivo.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Consecutivos() {
  const service = new Service()
  const headers = ["descripcion", "consecutivo", "posee_prefijo", "prefijo"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable headers={headers} title="Consecutivos" service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/consecutivos/crear">
              <Button className="btn btn-info">Nuevo Consecutivo</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Consecutivos.layout = Admin;

export default Consecutivos;
