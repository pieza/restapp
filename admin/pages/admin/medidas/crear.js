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
import Service from "../../../services/medida.service";
import MedidaForm from "../../../components/Forms/MedidaForm";

function CrearMedidas() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Medidas" item={item} callback={callback}>
        <MedidaForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearMedidas.layout = Admin;

export default CrearMedidas;
