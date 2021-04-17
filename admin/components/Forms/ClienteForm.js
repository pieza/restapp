import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import MesasComboBox from "../ComboBoxes/MesasComboBox";

export default function ClienteForm({ item, setItem }) {
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
            <label>Fecha llegada</label>
            <Input
              className="form-contrsol-alternative"
              type="date"
              onChange={e => setItem({ ...item, fecha_llegada: e.target.value })}
              value={item.fecha_llegada}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <MesasComboBox item={item} setItem={setItem} byRestaurant={true} onlyAvailable/>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup check>
            <Label>
            <Input
              className="form-control-alternative"
              type="checkbox"
              checked={item.reservacion}
              onChange={e => setItem({ ...item, reservacion: e.target.checked })}
            /> Reservacion
            </Label>
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup check>
            <Label>
            <Input
              className="form-control-alternative"
              type="checkbox"
              checked={item.barra}
              onChange={e => setItem({ ...item, barra: e.target.checked })}
            /> Barra
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}