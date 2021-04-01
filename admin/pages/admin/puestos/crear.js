import React, { useState } from "react";

// reactstrap components
import {
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/puesto.service";
import PuestoForm from "../../../components/Forms/PuestoForm";

function CrearPuestos() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Puestos" item={item} callback={callback}>
        <PuestoForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearPuestos.layout = Admin;

export default CrearPuestos;
