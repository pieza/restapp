import React, { useEffect, useState } from "react";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/caja.service";
import CerrarCajaForm from "../../../components/Forms/CerrarCajaForm";
import AuthService from "../../../services/auth.service";
import AlertUtil from "../../../utils/alert";
import Client from "../../../layouts/Client";

function CerrarCajas() {
  const service = new Service();

  const [item, setItem] = useState({
    apertura: false,
    cierre: true,
    descripcion: "Cierre de Caja",
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
      <BaseForm title="Cierre Cajas" item={item} callback={callback}>
        <CerrarCajaForm item={item} setItem={setItem} />
      </BaseForm>
    </>
  );
}

CerrarCajas.layout = Client;

export default CerrarCajas;
