import React, { useState } from "react";

// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/factura.service";
import OrdenForm from "../../../components/Forms/OrdenForm";
import Admin from "../../../layouts/Admin";

function CrearOrdenes() {
  const service = new Service()

  const [item, setItem] = useState({ monto: 0 })

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Orden" item={item} callback={callback}>
        <OrdenForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearOrdenes.layout = Admin;

export default CrearOrdenes;
