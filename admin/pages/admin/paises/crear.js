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
import Service from "../../../services/pais.service";
import PaisForm from "../../../components/Forms/PaisForm";

function CrearPaises() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Paises" item={item} callback={callback}>
        <PaisForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearPaises.layout = Admin;

export default CrearPaises;
