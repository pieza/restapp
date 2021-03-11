import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import PaisService from "../../../services/pais.service";
import Link from "next/link";

function Paises() {
  const service = new PaisService()
  const callback = (model) => {
    service.create(model)
  }
  return (
    <>
      <UserHeader />
      {/* Page content */}
      
      <Link href="/admin/paises/crear">
        <Button className="btn btn-info">Nuevo Pais</Button>
      </Link> 
    </>
  );
}

Paises.layout = Admin;

export default Paises;
