import React, { useState } from "react";

// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/orden.service";
import OrdenForm from "../../../components/Forms/OrdenForm";
import Client from "../../../layouts/Client";

function CrearOrdenes() {
  const service = new Service()

  const [item, setItem] = useState({})

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

CrearOrdenes.layout = Client;

export default CrearOrdenes;
