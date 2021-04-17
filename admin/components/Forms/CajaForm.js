import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import RestaurantesComboBox from '../ComboBoxes/RestaurantesComboBox';

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
          <RestaurantesComboBox item={item} setItem={setItem}/>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Descripcion</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, descripcion: e.target.value })}
              value={item.descripcion}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Entrada</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, entrada: e.target.value })}
              value={item.entrada}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup check>
            <Label>
            <Input
              className="form-control-alternative"
              type="checkbox"
              checked={item.apertura}
              onChange={e => setItem({ ...item, apertura: e.target.checked })}
            /> Apertura
            </Label>
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
              checked={item.cierre}
              onChange={e => setItem({ ...item, cierre: e.target.checked })}
            /> Cierre
            </Label>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}