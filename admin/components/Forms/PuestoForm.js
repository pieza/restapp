import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import RolesComboBox from '../ComboBoxes/RolesComboBox';

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
            <label>Tipo</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, tipo: e.target.value })}
              value={item.tipo}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <RolesComboBox item={item} setItem={setItem} />
        </Col>
      </Row>
    </>
  )
}