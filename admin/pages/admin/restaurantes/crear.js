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
import Service from "../../../services/restaurante.service";
import RestauranteForm from "../../../components/Forms/RestauranteForm";

function CrearRestaurantes() {
  const service = new Service()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Restaurantes" item={item} callback={callback}>
        <RestauranteForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearRestaurantes.layout = Admin;

export default CrearRestaurantes;
