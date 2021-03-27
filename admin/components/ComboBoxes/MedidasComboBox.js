import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/medida.service";

export default function MedidasComboBox({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [medidas, setMedidas] = useState([])

  useEffect(async () => {
    setMedidas(await service.find())
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Medidas</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, medida: e.target.value })}}
        value={item.medida}
        type="select">
        { medidas.map((medida, key) => 
          <option key={key} value={medida._id}>{ medida.unidad_medida }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}