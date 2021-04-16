import React, { useEffect, useState } from 'react';
import { FormGroup, Input, Col, Row, Label, Card } from "reactstrap";
import Service from "../../services/buffet.service";

export default function BuffetsMultiSelect({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [buffets, setBuffets] = useState([])

  useEffect(async () => {
    setBuffets(await service.find())
    console.log(buffets)
  }, [])

  function handleChange(e, buffet) {
    let tmpBuffets = item.buffets

    if(e.target.checked) {
      tmpBuffets.push(buffet._id)
    } else {
      const index = tmpBuffets.indexOf(buffet._id);
      if (index > -1) {
        tmpBuffets.splice(index, 1);
      }
    }
    setItem({ ...item, buffets: tmpBuffets })
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