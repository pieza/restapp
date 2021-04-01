import React, { useState } from "react";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/consecutivo.service";
import ConsecutivoForm from "../../../components/Forms/ConsecutivoForm";

function CrearConsecutivos() {
  const service = new Service()

  const [item, setItem] = useState({ consecutivo: 0 })

  const callback = async (data) => {
    return await service.create(data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Consecutivos" item={item} callback={callback}>
        <ConsecutivoForm item={item} setItem={setItem} />
      </BaseForm>
    </>
  );
}

CrearConsecutivos.layout = Admin;

export default CrearConsecutivos;
