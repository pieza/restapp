import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import ProductosComboBox from '../ComboBoxes/ProductosComboBox';

export default function PuestoForm({ item, setItem }) {
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
              className="form-control-alternative"
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
            <label>Apellidos</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, apellidos: e.target.value })}
              value={item.apellidos}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Cedula</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, cedula: e.target.value })}
              value={item.cedula}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Fax</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, fax: e.target.value })}
              value={item.fax}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Telefono oficina</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, telefono_oficina: e.target.value })}
              value={item.telefono_oficina}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Celular</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, celular: e.target.value })}
              value={item.celular}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Correo</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, correo: e.target.value })}
              value={item.correo}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Fecha ingreso</label>
            <Input
              className="form-contrsol-alternative"
              type="date"
              onChange={e => setItem({ ...item, fecha_ingreso: e.target.value })}
              value={item.fecha_ingreso}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <p>TODO: Pase de productos</p>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Direccion</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, direccion: e.target.value })}
              value={item.direccion}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}