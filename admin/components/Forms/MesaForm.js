import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import RestaurantesComboBox from '../ComboBoxes/RestaurantesComboBox';

export default function MesaForm({ item, setItem }) {
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
            <label>Sillas</label>
            <Input
              className="form-contrsol-alternative"
              type="number"
              onChange={e => setItem({ ...item, sillas: e.target.value })}
              value={item.sillas}
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
            <label>Estado</label>
            <Input
              className="form-control-alternative"
              type="text"
              onChange={e => setItem({ ...item, estado: e.target.value })}
              value={item.estado}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Numero</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, numero: e.target.value })}
              value={item.numero}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}