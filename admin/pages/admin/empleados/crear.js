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
import Service from "../../../services/empleado.service";
import EmpleadoForm from "../../../components/Forms/EmpleadoForm";

function CrearEmpleados() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Empleados" item={item} callback={callback}>
        <EmpleadoForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearEmpleados.layout = Admin;

export default CrearEmpleados;
