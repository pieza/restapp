import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/cliente.service";

export default function ClientesComboBox({ item, setItem, showLabel=true, disabled }) {
  const service = new Service()
  const [clientes, setClientes] = useState([])

  useEffect(async () => {
    setClientes(await service.find())
    setItem({ ...item, cliente: clientes[0]})
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Cliente</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, cliente: e.target.value })}}
        value={item.cliente}
        type="select"
        disabled={disabled}>
        { clientes.map((cliente, key) => 
          <option key={key} value={cliente._id}>{ cliente.nombre }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}