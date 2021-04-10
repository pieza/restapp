import React, { useEffect, useState } from 'react';
import { FormGroup, Input, Col, Row, Label, Card } from "reactstrap";
import Service from "../../services/rol.service";

export default function RolesMultiSelect({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [roles, setRoles] = useState([])

  useEffect(async () => {
    setRoles(await service.find())
    console.log(roles)
  }, [])

  function handleChange(e, rol) {
    let tmpRoles = item.roles

    if(e.target.checked) {
      tmpRoles.push(rol._id)
    } else {
      const index = tmpRoles.indexOf(rol._id);
      if (index > -1) {
        tmpRoles.splice(index, 1);
      }
    }
    setItem({ ...item, roles: tmpRoles })
  }

  if(!item.roles) setItem({ ...item, roles: [] })
  return (
    <>
      { showLabel ? <label>Roles</label> : null }
      <Card style={{maxHeight: '100px', overflowY: 'auto'}}>
        { roles.map((rol, key) =>
          <Col lg="6" key={key}>
            <FormGroup check>
              <Label>
              <Input
                className="form-control-alternative"
                type="checkbox"
                checked={item.roles && item.roles.indexOf(rol._id) > -1}
                onChange={e => {handleChange(e, rol)}}
              /> { rol.nombre }
              </Label>
            </FormGroup>
          </Col>
        )}
      </Card>
    </>
  )
}