import React, { useState } from "react";
import { Form, FormGroup, Input, Card, Col, Row, Button, CardBody } from "reactstrap";

export default function FiltersForm({ headers, callback, service }) {
  const [filters, setFilters] = useState({})

  const onSearchClick = async (e) => {
    e.preventDefault();
    console.log('XD', service)
    const data = await service.find(filters)
    callback(data);
  }
  
  return (
    <>
      <Card className="bg-gradient-secondary" style={{width: "100%"}}>
        <CardBody>
          <Form>
            <div className="pl-lg-4">
              <Row>
                { headers.map((header, key) => 
                  <Col lg="4" key={key}>
                    <FormGroup>
                      <Input
                        size="sm"
                        placeholder={header}
                        className="form-contrsol-alternative"
                        type="text"
                        onChange={e => {setFilters({...filters, [header]: e.target.value })}}
                      />
                    </FormGroup>
                  </Col>
                )}
                
              </Row>
              <Row>
                <Col md="12">
                  <Button
                    className="mr-4"
                    color="info"
                    onClick={onSearchClick}
                    size="sm"
                  >
                    Buscar
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        </CardBody>
      </Card>
    </>
  )
}