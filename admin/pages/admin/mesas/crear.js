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
import Service from "../../../services/mesa.service";
import MesaForm from "../../../components/Forms/MesaForm";

function CrearMesas() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Mesas" item={item} callback={callback}>
        <MesaForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearMesas.layout = Admin;

export default CrearMesas;
