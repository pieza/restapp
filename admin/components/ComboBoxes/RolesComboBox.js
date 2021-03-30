import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/rol .service";

export default function RolesComboBox({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [roles, setRoles] = useState([])

  useEffect(async () => {
    setRoles(await service.find())
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Roles</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, rol : e.target.value })}}
        value={item.rol }
        type="select">
        { roles.map((rol , key) => 
          <option key={key} value={rol ._id}>{ rol .nombre }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}