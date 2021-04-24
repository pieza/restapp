import React from "react";
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
  CardImg,
  Progress,
  Table,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
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

import Header from "components/Headers/Header.js";
const cardStyle = { width: "18rem" };
import  DashboardHeader from "components/Headers/DashboardHeader.js";

const Dashboard = (props) => {
  const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
    <DashboardHeader />
      {/* Page content */}
      <Container className="mt--5" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/fondo.jpeg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Restaurantes</CardTitle>
                <CardText>
                  Administra y crea tu restaurante desde la una plataforma en línea fácil de usar
          </CardText>
 
              </CardBody>
            </Card>

          </Col>

          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/prove.jpeg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Proovedores</CardTitle>
                <CardText>
                  Maneja los productos que suministran los provedores de cada restaurante
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/empleados.jpeg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Empleados</CardTitle>
                <CardText>
                  Administrá los empleados de cada restaurante, así como sus roles y puesto
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/facturacion.jpeg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Facturación</CardTitle>
                <CardText>
                  Llevá control de todas las facturas de cada restaurante para un mejor control de las finanzas
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/sec.jpeg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Seguridad</CardTitle>
                <CardText>
                  Controle los roles de sus usuarios al sistema por medio de permisos en la seccion de seguridad
          </CardText>
 
              </CardBody>
            </Card>

          </Col>

          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/productos.jpeg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Productos</CardTitle>
                <CardText>
                  Maneja los productos para asegurarse que no se queden sin inventario
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/caja.jpeg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Cajas</CardTitle>
                <CardText>
                  Manejo de apertura y cierre de cajas de cada restaurante para control diario
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/mesas.jpeg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Mesas</CardTitle>
                <CardText>
                  Administración de las mesas para un mejor control de los clientes
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Dashboard.layout = Admin;

export default Dashboard;
