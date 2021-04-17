import React, { useEffect, useState } from "react";

// reactstrap components
import { FormGroup, Input, Row, Col } from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/caja.service";
import CajaForm from "../../../components/Forms/CajaForm";
import RestauranteService from "../../../services/restaurante.service";
import AuthService from "../../../services/auth.service";
import AlertUtil from "../../../utils/alert";

function CrearCajas() {
  const service = new Service();

  const [item, setItem] = useState({
    apertura: true,
    cierre: false,
    descripcion: "Apertura de Caja",
    fecha: new Date(),
  });

  useEffect(async () => {
    const user = await AuthService.current()
    setItem({ ...item, restaurante: user.empleado.restaurante._id})
  }, [])

  const callback = async (data) => {
    await service.create(data);
    await AlertUtil.success('Elemento guardado correctamente!')
  }

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
