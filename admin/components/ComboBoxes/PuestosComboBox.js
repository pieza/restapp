import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/puesto.service";

export default function PuestosComboBox({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [puestos, setPuestos] = useState([])

  useEffect(async () => {
    setPuestos(await service.find())
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Puestos</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, puesto: e.target.value })}}
        value={item.puesto}
        type="select">
        { puestos.map((puesto , key) => 
          <option key={key} value={puesto._id}>{ puesto.nombre }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}