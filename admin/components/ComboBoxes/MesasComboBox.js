import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import AuthService from '../../services/auth.service';
import Service from "../../services/mesa.service";

export default function MesasComboBox({ item, setItem, showLabel=true, byRestaurant=false }) {
  const service = new Service()
  const [mesas, setMesas] = useState([])

  useEffect(async () => {
    const filters = {}
    if(byRestaurant) {
      const user = await AuthService.current()
      filters.restaurante = user.restaurante
    }
    setMesas(await service.find(filters))
  }, [])

  return (
    <FormGroup>
      { showLabel ? <label>Mesas</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, mesa: e.target.value })}}
        value={item.mesa}
        type="select">
        { mesas.map((mesa, key) => 
          <option key={key} value={mesa._id}>{ mesa.unidad_mesa }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}