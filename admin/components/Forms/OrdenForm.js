import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export default function OrdenForm({ item, setItem }) {
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
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>monto</label>
            <Input
              className="form-contrsol-alternative"
              type="number"
              onChange={e => setItem({ ...item, monto: e.target.value })}
              value={item.monto}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Simbologia</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, simbologia: e.target.value })}
              value={item.simbologia}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}