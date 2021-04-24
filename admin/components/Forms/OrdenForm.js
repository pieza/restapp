import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import ClientesComboBox from '../ComboBoxes/ClientesComboBox';
import BuffetsMultiSelect from '../MultiSelects/BuffetsMultiSelect';
import EspecialidadesMultiSelect from '../MultiSelects/EspecialidadesMultiSelect';
import ComestiblesMultiSelect from '../MultiSelects/ComestiblesMultiSelect';
import BebidasMultiSelect from '../MultiSelects/BebidasMultiSelect';
import { useEffect } from "react";

export default function OrdenForm({ item, setItem, disabled }) {

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
        <Col lg="6">
          <FormGroup>
            <label>Fecha</label>
            <Input
              className="form-contrsol-alternative"
              type="date"
              onChange={e => setItem({ ...item, fecha: e.target.value })}
              value={item.fecha}
              disabled={disabled}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Monto</label>
            <Input
              className="form-contrsol-alternative"
              type="number"
              onChange={e => setItem({ ...item, monto: e.target.value })}
              value={item.monto}
              disabled={true}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <ClientesComboBox item={item} setItem={setItem} disabled={disabled}/>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <EspecialidadesMultiSelect item={item} setItem={setItem} addMonto disabled={disabled}/>
        </Col>
        <Col lg="6">
          <BuffetsMultiSelect item={item} setItem={setItem} addMonto disabled={disabled}/>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <BebidasMultiSelect item={item} setItem={setItem} addMonto disabled={disabled}/>
        </Col>
      </Row>
    </>
  )
}