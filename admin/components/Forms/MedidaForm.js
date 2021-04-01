import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export default function MedidaForm({ item, setItem }) {
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
            <label>Detalle</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, detalle: e.target.value })}
              value={item.detalle}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Unidad medida</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, unidad_medida: e.target.value })}
              value={item.unidad_medida}
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