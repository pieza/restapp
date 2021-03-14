export default function ConsecutivoForm() {
  return (
    <>
      <Row>
        <Col lg="6">
          <FormGroup>
            <label>Descripcion</label>
            <Input
              className="form-contrsol-alternative"
              type="text"
              onChange={e => setItem({ ...item, descripcion: e.target.value })}
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label>Consecutivo</label>
            <Input
              className="form-control-alternative"
              type="number"
              onChange={e => setItem({ ...item, consecutivo: e.target.value })}
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
              checked={item.posee_prefijo}
              onChange={e => setItem({ ...item, posee_prefijo: e.target.checked })}
            /> Posee prefijo
            </Label>
          </FormGroup>
        </Col>
        { item.posee_prefijo ? (
          <Col lg="6">
            <FormGroup>
              <label>Prefijo</label>
              <Input
                className="form-control-alternative"
                type="text"
                onChange={e => setItem({ ...item, prefijo: e.target.value })}
              />
            </FormGroup>
          </Col>
        ) : null }
      </Row>
    </>
  )
}