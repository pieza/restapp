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
import Service from "../../../services/especialidad.service";
import EspecialidadForm from "../../../components/Forms/EspecialidadForm";

function CrearEspecialidades() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Especialidades" item={item} callback={callback}>
        <EspecialidadForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearEspecialidades.layout = Admin;

export default CrearEspecialidades;
