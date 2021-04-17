import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/restaurante.service";

export default function RestaurantesComboBox({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(async () => {
    setRestaurantes(await service.find())
    setItem({ ...item, restaurante: restaurantes[0]})
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Restaurante</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, restaurante: e.target.value })}}
        value={item.restaurante}
        type="select">
        { restaurantes.map((restaurante, key) => 
          <option key={key} value={restaurante._id}>{ restaurante.nombre }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}