import React, { useEffect, useState } from 'react'
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export default function CajaForm({ item, setItem }) {
  return (
    <>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Codigo</label>
            <Input
              className="form-control-alternative"
              type="text"
              value={item.codigo}
              disabled={true}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Monto de cierre</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, entrada: e.target.value })}
              value={item.entrada}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}
