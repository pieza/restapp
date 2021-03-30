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
import Service from "../../../services/producto.service";
import Link from "next/link";
import BaseTable from "../../../components/Generic/BaseTable";

function Productos() {
  const service = new Service()
  const headers = ["codigo", "nombre", "descripcion", "cantidad", "marca", "restaurante", "es_liquido", "medida", "precio"]

  return (
    <>
      <UserHeader />
      {/* Table */}
      <Container className="mt--7" fluid>
        <Row>
          <Col  xl="12">
            <BaseTable 
              headers={headers}
              title="Productos" 
              service={service} />
          </Col>
        </Row>
        {/* Footer */}
        <Row>
          <Col className="py-4" lg="6">
            <Link href="/admin/productos/crear">
              <Button className="btn btn-info">Nuevo Producto</Button>
            </Link> 
          </Col>
        </Row>
      </Container>
    </>
  );
}

Productos.layout = Admin;

export default Productos;
