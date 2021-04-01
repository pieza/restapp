import React, { useEffect, useState } from 'react';
import { FormGroup, Input } from "reactstrap";
import Service from "../../services/producto.service";

export default function ProductosComboBox({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [productos, setProductos] = useState([])

  useEffect(async () => {
    setProductos(await service.find())
  }, [])
  return (
    <FormGroup>
      { showLabel ? <label>Productos</label> : null }
      <Input 
        onChange={e => {setItem({ ...item, producto: e.target.value })}}
        value={item.producto}
        type="select">
        { productos.map((producto , key) => 
          <option key={key} value={producto._id}>{ producto.nombre }</option>
        ) }  
      </Input>
    </FormGroup>
  )
}