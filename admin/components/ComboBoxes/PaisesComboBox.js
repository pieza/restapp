import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/pais.service";

export default function PaisesComboBox({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [paises, setPaises] = useState([])

  useEffect(async () => {
    setPaises(await service.find())
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Nacionalidad</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, nacionalidad: e.target.value })}}
        value={item.nacionalidad}
        type="select">
        { paises.map((pais, key) => 
          <option key={key} value={pais._id}>{ pais.nombre }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}