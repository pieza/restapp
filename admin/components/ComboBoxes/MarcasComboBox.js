import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/marca.service";

export default function MarcasComboBox({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [marcas, setMarcas] = useState([])

  useEffect(async () => {
    setMarcas(await service.find())
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Marcas</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, marca: e.target.value })}}
        value={item.marca}
        type="select">
        { marcas.map((marca, key) => 
          <option key={key} value={marca._id}>{ marca.nombre }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}