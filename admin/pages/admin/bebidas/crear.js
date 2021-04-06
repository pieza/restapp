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
import Service from "../../../services/bebida.service";
import BebidaForm from "../../../components/Forms/BebidaForm";

function CrearBebidas() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Bebidas" item={item} callback={callback}>
        <BebidaForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearBebidas.layout = Admin;

export default CrearBebidas;
