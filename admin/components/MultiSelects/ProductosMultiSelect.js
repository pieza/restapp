import React, { useEffect, useState } from 'react';
import { FormGroup, Input, Col, Row, Label, Card } from "reactstrap";
import Service from "../../services/producto.service";

export default function ProductosMultiSelect({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [productos, setProductos] = useState([])

  useEffect(async () => {
    setProductos(await service.find())
    console.log(productos)
  }, [])

  function handleChange(e, producto) {
    let tmpProductos = item.productos

    if(e.target.checked) {
      tmpProductos.push(producto._id)
    } else {
      const index = tmpProductos.indexOf(producto._id);
      if (index > -1) {
        tmpProductos.splice(index, 1);
      }
    }
    setItem({ ...item, productos: tmpProductos })
  }
  if(!item.productos) setItem({ ...item, productos: [] })
  return (
    <>
      { showLabel ? <label>Productos</label> : null }
      <Card style={{maxHeight: '100px', overflowY: 'auto'}}>
        { productos.map((producto, key) =>
          <Col lg="6" key={key}>
            <FormGroup check>
              <Label>
              <Input
                className="form-contproducto-alternative"
                type="checkbox"
                checked={item.productos && item.productos.indexOf(producto._id) > -1}
                onChange={e => {handleChange(e, producto)}}
              /> { producto.nombre }
              </Label>
            </FormGroup>
          </Col>
        )}
      </Card>
    </>
  )
}