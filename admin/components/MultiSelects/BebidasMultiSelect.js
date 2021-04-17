import React, { useEffect, useState } from 'react';
import { FormGroup, Input, Col, Row, Label, Card } from "reactstrap";
import Service from "../../services/bebida.service";

export default function BebidasMultiSelect({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [bebidas, setBebidas] = useState([])

  useEffect(async () => {
    setBebidas(await service.find())
    console.log(bebidas)
  }, [])

  function handleChange(e, bebida) {
    let tmpBebidas = item.bebidas

    if(e.target.checked) {
      tmpBebidas.push(bebida._id)
    } else {
      const index = tmpBebidas.indexOf(bebida._id);
      if (index > -1) {
        tmpBebidas.splice(index, 1);
      }
    }
    setItem({ ...item, bebidas: tmpBebidas })
  }
  if(!item.bebidas) setItem({ ...item, bebidas: [] })
  return (
    <>
      { showLabel ? <label>Bebidas</label> : null }
      <Card style={{maxHeight: '100px', overflowY: 'auto'}}>
        { bebidas.map((bebida, key) =>
          <Col lg="6" key={key}>
            <FormGroup check>
              <Label>
              <Input
                className="form-contbebida-alternative"
                type="checkbox"
                checked={item.bebidas && item.bebidas.indexOf(bebida._id) > -1}
                onChange={e => {handleChange(e, bebida)}}
              /> { bebida.nombre }
              </Label>
            </FormGroup>
          </Col>
        )}
      </Card>
    </>
  )
}