import React, { useState } from "react";

// reactstrap components
import { FormGroup, Input, Row, Col } from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/caja.service";
import CajaForm from "../../../components/Forms/CajaForm";

function CrearCajas() {
  const service = new Service();

  const [item, setItem] = useState({
    apertura: true,
    cierre: false,
    descripcion: "Apertura de Caja",
    restaurante: "60568ff5c86b804a34582b0c",
    fecha: "2000-01-01",
  });

  const callback = async (data) => await service.create(data);

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Cajas" item={item} callback={callback}>
        <CajaForm item={item} setItem={setItem} />
      </BaseForm>
    </>
  );
}

CrearCajas.layout = Admin;

export default CrearCajas;
