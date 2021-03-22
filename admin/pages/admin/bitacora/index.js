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
import Service from "../../../services/bitacora.service";
import BaseTable from "../../../components/Generic/BaseTable";

function Consecutivos() {
  const service = new Service()

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable title="Bitacora" service={service} doDetails={true} doDelete={false} doEdit={false}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

Consecutivos.layout = Admin;

export default Consecutivos;
