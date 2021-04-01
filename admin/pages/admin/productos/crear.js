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
import Service from "../../../services/producto.service";
import ProductoForm from "../../../components/Forms/ProductoForm";

function CrearProductos() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Productos" item={item} callback={callback}>
        <ProductoForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearProductos.layout = Admin;

export default CrearProductos;
