/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import {
  Card, CardBody, CardTitle, Container, Row, Col,
} from 'reactstrap';
import AuthService from '../../services/auth.service';
import RestauranteService from '../../services/restaurante.service';
import MesaService from '../../services/mesa.service';
import ClienteService from '../../services/cliente.service';
import ProductoService from '../../services/producto.service';

// reactstrap components

function HeaderClient() {
  const [user, setUser] = useState({});
  const [restaurante, setRestaurante] = useState({});
  const [mesas, setMesas] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState(0);
  const restauranteService = new RestauranteService();
  const mesaService = new MesaService();
  const clienteService = new ClienteService();
  const productoService = new ProductoService();
  useEffect(async () => {
    const _user = await AuthService.current();
    if (_user) {
	    setUser(_user);
	    const restaurante_id = _user.empleado.restaurante._id;
	    const restaurante = await restauranteService.findById(restaurante_id);
	    if (restaurante) setRestaurante(restaurante);
	    const mesas = await mesaService.find({ restaurante: restaurante_id });
	    if (mesas.length) setMesas(mesas);
	    const clientes = await clienteService.find({ restaurante: restaurante_id });
	    if (clientes.length) setClientes(clientes);
	    const productos = await productoService.find({ restaurante: restaurante_id });
	    const totalProductos = productos.reduce((previous, it) => previous += parseInt(it.cantidad), 0); // total cantidad + cantidad producto actual
	    setProductos(totalProductos)
    }
  }, []);
  return (
    <>
      <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Clientes
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{clientes.length}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {' '}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Mesas Disponibles
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{mesas.length}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {' '}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Mesas Ocupadas
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{mesas.length - mesas.filter((m) => m.estado === 'disponible').length}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {' '}
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Productos
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{productos}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {' '}
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HeaderClient;
