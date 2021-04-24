/* eslint-disable  */
import { Col, FormGroup, Input, Label, Row, Button } from "reactstrap";
import RestaurantesComboBox from "../ComboBoxes/RestaurantesComboBox";
import MesaService from "../../services/mesa.service";
import AlertUtil from "../../utils/alert";
import { useRouter } from "next/router";

/** @description Handles Free Table Functionality */
const freeTable = async (id, router) => {
  const mesaService = new MesaService();
  return await mesaService
    .update(id, { estado: "disponible" })
    .then(async () => {
      await AlertUtil.success("Elemento guardado correctamente!");
      let routes = router.pathname.split("/");
      routes.pop();
      router.push(`${routes.join("/")}`);
    });
};
/** @description Renders Free Table Button  */
const renderFreeTableButton = (mesa) => {
  const router = useRouter()
  if (mesa.estado !== "disponible") {
    return (
      <Row>
        <Col lg="6">
          <FormGroup>
            <Button
              className="mr-4"
              color="danger"
              onClick={() => freeTable(mesa._id, router)}
              size="md"
            >
              Liberar
            </Button>
          </FormGroup>
        </Col>
      </Row>
    );
  }
  return <div></div>;
};
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
              onChange={(e) => setItem({ ...item, numero: e.target.value })}
              value={item.numero}
            />
          </FormGroup>
        </Col>
      </Row>
      {renderFreeTableButton(item)}
    </>
  );
}
