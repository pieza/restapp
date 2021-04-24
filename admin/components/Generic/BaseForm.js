import { useRouter } from "next/router";
import React from "react";
import { 
  Button,
  Card,
  CardHeader,
  CardBody,
  Form,
  Container,
  Row,
  Col,
} from "reactstrap";
import AlertUtil from "../../utils/alert";

export default function BaseForm({ children, title, item, callback, disable, print }) {
  const router = useRouter()

  const handleButton = async (e) => {
    e.preventDefault();

    let result = await callback(item)

    if(result) {
      await AlertUtil.success('Elemento guardado correctamente!')
      let routes = router.pathname.split('/')
      routes.pop()
      router.push(`${routes.join('/')}`)
    }
  }

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
                  { children }
                  <Row>
                  { !disable ? 
                    <Col lg="6">
                      <Button
                        className="mr-4"
                        color="success"
                        onClick={handleButton}
                        size="md"
                      >
                        Guardar
                      </Button>
                    </Col>
                   : null }
                   { print ? <Col lg="6">
                      <Button
                        className="mr-4"
                        color="info"
                        onClick={(e) => window.print()}
                        size="md"
                      >
                        Imprimir
                      </Button>
                    </Col> : null }
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