import React, { useEffect, useState } from "react";

// core components
import UserHeader from "components/Headers/UserHeader.js";
import BaseForm from "../../../components/Generic/BaseForm";
import Service from "../../../services/cliente.service";
import ClienteForm from "../../../components/Forms/ClienteForm";
import Client from "../../../layouts/Client";
import AuthService from "../../../services/auth.service";
import MesaService from "../../../services/mesa.service";

function CrearClientes() {
  const service = new Service()
  const mesaService = new MesaService()

  const [item, setItem] = useState({})

  const callback = async (data) => {
    if(data.mesa && !data.barra) {
      const mesa = await mesaService.findById(data.mesa)
      mesa.estado = 'ocupada'
      await mesaService.update(mesa._id, mesa)
    }
    
    return await service.create(data)
  }

  useEffect(async () => {
    const user = await AuthService.current()
    setItem({ ...item, restaurante: user.empleado.restaurante._id})
  }, [])

  return (
    <>
      <UserHeader />
      <BaseForm title="Crear Cliente" item={item} callback={callback}>
        <ClienteForm item={item}  setItem={setItem}/>
      </BaseForm>
    </>
  );
}

CrearClientes.layout = Client;

export default CrearClientes;
