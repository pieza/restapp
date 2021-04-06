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
import Service from "../../../services/proveedor.service";
import ProveedorForm from "../../../components/Forms/ProveedorForm";

function CrearProveedores() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Proveedores" item={item} callback={callback}>
        <ProveedorForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearProveedores.layout = Admin;

export default CrearProveedores;
