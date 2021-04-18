import React, { useEffect, useState } from 'react';
import { FormGroup, Input, Col, Row, Label, Card } from "reactstrap";
import Service from "../../services/buffet.service";

export default function BuffetsMultiSelect({ item, setItem, showLabel=true, addMonto=false }) {
  const service = new Service()
  const [buffets, setBuffets] = useState([])

  useEffect(async () => {
    setBuffets(await service.find())
  }, [])

  function handleChange(e, buffet) {
    let tmpBuffets = item.buffets
    let tmpMonto = item.monto

    if(e.target.checked) {
      tmpBuffets.push(buffet._id)
      if(addMonto) tmpMonto += buffet.precio
    } else {
      const index = tmpBuffets.indexOf(buffet._id);
      if (index > -1) {
        tmpBuffets.splice(index, 1)
        if(addMonto) tmpMonto -= buffet.precio
      }
    }
    setItem({ ...item, buffets: tmpBuffets, monto: tmpMonto })
  }
  if(!item.buffets) setItem({ ...item, buffets: [] })
  return (
    <>
      { showLabel ? <label>Buffets</label> : null }
      <Card style={{maxHeight: '100px', overflowY: 'auto'}}>
        { buffets.map((buffet, key) =>
          <Col lg="6" key={key}>
            <FormGroup check>
              <Label>
              <Input
                className="form-contbuffet-alternative"
                type="checkbox"
                checked={item.buffets && item.buffets.indexOf(buffet._id) > -1}
                onChange={e => {handleChange(e, buffet)}}
              /> { buffet.nombre }
              </Label>
            </FormGroup>
          </Col>
        )}
      </Card>
    </>
  )
}