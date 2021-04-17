import React, { useEffect, useState } from "react";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/cliente.service";
import ClienteForm from "../../../components/Forms/ClienteForm";
import Client from "../../../layouts/Client";
import AuthService from "../../../services/auth.service";

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

function EditarClientes({ data }) {
  const service = new Service()
  const [item, setItem] = useState(data)

  useEffect(async () => {
    const user = await AuthService.current()
    setItem({ ...item, restaurante: user.empleado.restaurante._id})
  }, [])

  const callback = async (data) => {
    return await service.update(data._id, data)
  }

  return (
    <>
      <UserHeader />
      <BaseForm title="Editar Clientes" item={item} callback={callback}>
        <ClienteForm item={item} setItem={setItem}/>
      </BaseForm>
    </>
  );
}

EditarClientes.layout = Client;

export default EditarClientes;
