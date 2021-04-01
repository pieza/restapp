import React, { useState } from "react";
import { Form, FormGroup, Input, Card, Col, Row, Button, CardBody, Label } from "reactstrap";

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
                    { header == 'activo' || header == 'es_liquido' ?
                      <FormGroup check>
                        <Label>
                          <Input
                            className="form-control-alternative"
                            type="checkbox"
                            checked={filters[header]}
                            onChange={e => setFilters({ ...filters, [header]: e.target.checked })}
                          /> {header.replace('_', ' ')}
                        </Label>
                      </FormGroup>  
                      :
                      <FormGroup>
                        <Input
                          size="sm"
                          placeholder={header.replace('_', ' ')}
                          className="form-contrsol-alternative"
                          type="text"
                          onChange={e => {setFilters({...filters, [header]: e.target.value })}}
                        />
                      </FormGroup> 
                    }
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