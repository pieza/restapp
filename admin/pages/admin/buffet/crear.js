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
import Service from "../../../services/buffet.service";
import BuffetForm from "../../../components/Forms/BuffetForm";

function CrearBuffet() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Buffet" item={item} callback={callback}>
        <BuffetForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearBuffet.layout = Admin;

export default CrearBuffet;
