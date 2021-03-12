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

  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await service.find())
  }, []);

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable title="Consecutivos" data={data} service={service} />
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
