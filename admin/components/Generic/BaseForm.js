import React from "react";
import { 
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function BaseForm({ title, item, callback }) {
  return (
    <Container className="mt--7" fluid>
      <Row>
        <Col  xl="12">
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">{title}</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          className="form-control-alternative"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Email address
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          placeholder="jesse@example.com"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          First name
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Lucky"
                          id="input-first-name"
                          placeholder="First name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Last name
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="Jesse"
                          id="input-last-name"
                          placeholder="Last name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <Button
                        className="mr-4"
                        color="info"
                        onClick={(e) => {e.preventDefault();callback(item)}}
                        size="md"
                      >
                        Guardar
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}