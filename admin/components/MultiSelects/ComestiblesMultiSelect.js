import React, { useEffect, useState } from 'react';
import { FormGroup, Input, Col, Row, Label, Card } from "reactstrap";
import Service from "../../services/comestible.service";

export default function ComestiblesMultiSelect({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [comestibles, setComestibles] = useState([])

  useEffect(async () => {
    setComestibles(await service.find())
    console.log(comestibles)
  }, [])

  function handleChange(e, comestible) {
    let tmpComestibles = item.comestibles

    if(e.target.checked) {
      tmpComestibles.push(comestible._id)
    } else {
      const index = tmpComestibles.indexOf(comestible._id);
      if (index > -1) {
        tmpComestibles.splice(index, 1);
      }
    }
    setItem({ ...item, comestibles: tmpComestibles })
  }
  if(!item.comestibles) setItem({ ...item, comestibles: [] })
  return (
    <>
      { showLabel ? <label>Comestibles</label> : null }
      <Card style={{maxHeight: '100px', overflowY: 'auto'}}>
        { comestibles.map((comestible, key) =>
          <Col lg="6" key={key}>
            <FormGroup check>
              <Label>
              <Input
                className="form-contcomestible-alternative"
                type="checkbox"
                checked={item.comestibles && item.comestibles.indexOf(comestible._id) > -1}
                onChange={e => {handleChange(e, comestible)}}
              /> { comestible.nombre }
              </Label>
            </FormGroup>
          </Col>
        )}
      </Card>
    </>
  )
}