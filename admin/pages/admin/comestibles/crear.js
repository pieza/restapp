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
import Service from "../../../services/comestible.service";
import ComestibleForm from "../../../components/Forms/ComestibleForm";

function CrearComestibles() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Comestibles" item={item} callback={callback}>
        <ComestibleForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearComestibles.layout = Admin;

export default CrearComestibles;
