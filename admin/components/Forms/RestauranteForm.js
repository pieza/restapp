import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export default function RestauranteForm({ item, setItem }) {
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
            <label>Nombre</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, nombre: e.target.value })}
              value={item.nombre}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Aforo</label>
            <Input
              className="form-contrsol-alternative"
              type="number"
              onChange={e => setItem({ ...item, aforo: e.target.value })}
              value={item.aforo}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Teléfono</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, telefono: e.target.value })}
              value={item.telefono}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Dirección</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, direccion: e.target.value })}
              value={item.direccion}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Especialidad</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, especialidad: e.target.value })}
              value={item.especialidad}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup check>
            <Label>
            <Input
              className="form-control-alternative"
              type="checkbox"
              checked={item.activo}
              onChange={e => setItem({ ...item, activo: e.target.checked })}
            /> Activo
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}