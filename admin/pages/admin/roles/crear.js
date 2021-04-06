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
import Service from "../../../services/rol.service";
import RolForm from "../../../components/Forms/RolForm";

function CrearRoles() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Roles" item={item} callback={callback}>
        <RolForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearRoles.layout = Admin;

export default CrearRoles;
