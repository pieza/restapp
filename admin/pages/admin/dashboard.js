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
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
          </CardText>
 
              </CardBody>
            </Card>

          </Col>

          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
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
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
          </CardText>
 
              </CardBody>
            </Card>

          </Col>

          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
          </CardText>
 
              </CardBody>
            </Card>
          </Col>
          <Col xl="3">
            <Card style={cardStyle}>
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x600.jpg")}
                top
              ></CardImg>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
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
