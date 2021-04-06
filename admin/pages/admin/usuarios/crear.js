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
import Service from "../../../services/usuario.service";
import UsuarioForm from "../../../components/Forms/UsuarioForm";

function CrearUsuarios() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Usuarios" item={item} callback={callback}>
        <UsuarioForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearUsuarios.layout = Admin;

export default CrearUsuarios;
