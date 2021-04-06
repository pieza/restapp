import React, { useState } from "react";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/usuario.service";
import UsuarioForm from "../../../components/Forms/UsuarioForm";

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

function EditarUsuarios({ data }) {
  const service = new Service()
  const [item, setItem] = useState(data)

  const callback = async (data) => {
    return await service.update(data._id, data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Editar Usuarios" item={item} callback={callback}>
        <UsuarioForm item={item} setItem={setItem}/>
      </BaseForm>
    </>
  );
}

EditarUsuarios.layout = Admin;

export default EditarUsuarios;
