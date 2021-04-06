import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export default function EspecialidadForm({ item, setItem }) {
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
            <label>Precio</label>
            <Input
              className="form-contrsol-alternative"
              type="number"
              onChange={e => setItem({ ...item, precio: e.target.value })}
              value={item.precio}
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
            <label>Imagen</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, imagen: e.target.value })}
              value={item.imagen}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}