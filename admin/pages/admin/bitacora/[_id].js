import React, { useState } from "react";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/bitacora.service";
import BitacoraForm from "../../../components/Forms/BitacoraForm";

export async function getStaticProps({ params }) {
  const service = new Service()

  const data = await service.findById(params._id)

  return { props: { data } }
}

export async function getStaticPaths() {
  const service = new Service()

  const items = await service.find()

  const paths = items.map((item) => ({
    params: { _id: item._id },
  }))

  return { paths, fallback: false }
}

function DetallesBitacora({ data }) {
  const service = new Service()
  const [item, setItem] = useState(data)

  return (
    <>
      <UserHeader />
      <BaseForm title="Bitacora" item={item} disable={true}>
        <BitacoraForm item={item} setItem={setItem}/>
      </BaseForm>
    </>
  );
}

DetallesBitacora.layout = Admin;

export default DetallesBitacora;
