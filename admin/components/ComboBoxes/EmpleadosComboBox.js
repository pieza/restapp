import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/empleado.service";

export default function EmpleadosComboBox({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [empleados, setEmpleados] = useState([])

  useEffect(async () => {
    setEmpleados([{_id: null, nombre: 'No asignar'}, ...await service.find()])
    setItem({ ...item, empleado: empleados[0]})
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Empleados</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, empleado: e.target.value })}}
        value={item.empleado}
        type="select">
        { empleados.map((empleado, key) => 
          <option key={key} value={empleado._id}>{ empleado.nombre }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}