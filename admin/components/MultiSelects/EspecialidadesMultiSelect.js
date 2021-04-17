import React, { useEffect, useState } from 'react';
import { FormGroup, Input, Col, Row, Label, Card } from "reactstrap";
import Service from "../../services/especialidad.service";

export default function EspecialidadesMultiSelect({ item, setItem, showLabel=true }) {
  const service = new Service()
  const [especialidades, setEspecialidades] = useState([])

  useEffect(async () => {
    setEspecialidades(await service.find())
    console.log(especialidades)
  }, [])

  function handleChange(e, especialidad) {
    let tmpEspecialidades = item.especialidades

    if(e.target.checked) {
      tmpEspecialidades.push(especialidad._id)
    } else {
      const index = tmpEspecialidades.indexOf(especialidad._id);
      if (index > -1) {
        tmpEspecialidades.splice(index, 1);
      }
    }
    setItem({ ...item, especialidades: tmpEspecialidades })
  }
  if(!item.especialidades) setItem({ ...item, especialidades: [] })
  return (
    <>
      { showLabel ? <label>Especialidades</label> : null }
      <Card style={{maxHeight: '100px', overflowY: 'auto'}}>
        { especialidades.map((especialidad, key) =>
          <Col lg="6" key={key}>
            <FormGroup check>
              <Label>
              <Input
                className="form-contespecialidad-alternative"
                type="checkbox"
                checked={item.especialidades && item.especialidades.indexOf(especialidad._id) > -1}
                onChange={e => {handleChange(e, especialidad)}}
              /> { especialidad.nombre }
              </Label>
            </FormGroup>
          </Col>
        )}
      </Card>
    </>
  )
}