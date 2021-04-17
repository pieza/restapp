import React, { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Client from "../../layouts/Client";
import HeaderClient from "../../components/Headers/HeaderClient";
import AuthService from "../../services/auth.service";
import MesaService from "../../services/mesa.service";

const Dashboard = (props) => {
  const mesaService = new MesaService();

  const [mesas, setMesas] = useState([]);

  useEffect(async () => { 
    const user = await AuthService.current();
    setMesas(await mesaService.find({ restaurante: user.empleado.restaurante._id }))
  }, [])


  const ChairImg = ({active}) => {
    return (
      <img
        alt={active ? 'disponible' : 'ocupada' }
        className="img-fluid"
        src={require(`assets/img/brand/${active ? 'green' : 'red'}.png`)}
      />
    )
  }

  const BarraImg = () => {
    return (
      <img 
        className="img-fluid"
        src={require(`assets/img/brand/table.png`)}
      />
    )
  }


  return (
    <>
      <HeaderClient />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Disponibilidad
                    </h6>
                    <h2 className="mb-0">Mesas</h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <>
                  <Row>
                    <Col lg="8">
                      <Row>
                        { mesas.map((mesa, key) => 
                          <Col lg="4" key={key}>
                            <ChairImg active={mesa.estado == 'disponible'}/>
                          </Col>
                        )}
                      </Row>
                    </Col>
                    <Col lg="4">
                      <BarraImg />
                    </Col>
                  </Row>
                </>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Dashboard.layout = Client;

export default Dashboard;
