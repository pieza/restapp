/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

var ps;

function Sidebar(props) {
  // used for checking current route
  const router = useRouter();
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return router.route.indexOf(routeName) > -1;
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key} active={activeRoute(prop.layout + prop.path)}>
          <Link href={prop.layout + prop.path}>
            <NavLink
              href="#pablo"
              active={activeRoute(prop.layout + prop.path)}
              onClick={closeCollapse}
            >
              <i className={prop.icon} />
              {prop.name}
            </NavLink>
          </Link>
        </NavItem>
      );
    });
  };
  const { routes, logo } = props;
  let navbarBrand = (
    <NavbarBrand href="#pablo" className="pt-0">
      <img alt={logo.imgAlt} className="navbar-brand-img" src={logo.imgSrc} />
    </NavbarBrand>
  );
  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo && logo.innerLink ? (
          <Link href={logo.innerLink}>
            <span>{navbarBrand}</span>
          </Link>
        ) : null}
        {logo && logo.outterLink ? (
          <a href={logo.innerLink} target="_blank">
            {navbarBrand}
          </a>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <Link href="/admin/profile">
                <DropdownItem>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
              </Link>
              <Link href="/admin/profile">
                <DropdownItem>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
              </Link>
              <Link href="/admin/profile">
                <DropdownItem>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
              </Link>
              <Link href="/admin/profile">
                <DropdownItem>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
              </Link>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link href={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Administración</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="/admin/restaurantes">
                <i className="ni ni ni-building text-blue" />
                Restaurantes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/buffet">
              <i className="ni ni ni-books text-blue" />
                Buffet
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/bebidas">
              <i className="fa fa-beer text-blue"></i>
                Bebidas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/especialidades">
                <i className="ni ni ni-paper-diploma text-blue" />
                Especialidades
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/mesas">
                <i className="ni ni ni-align-center text-blue" />
                Mesas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/puestos">
              <i className="fa fa-user-plus text-blue"></i>
                Puestos
              </NavLink>
            </NavItem>
          </Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Proveedores</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="/admin/marcas">
                <i className="ni ni-tag text-info" />
                Marcas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/comestibles">
              <i className="ni ni-cart text-info" />
                Comestibles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/productos">
              <i className="ni ni-archive-2 text-info" />
                Productos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/proveedores">
              <i className="fa fa-truck text-info"></i>
                Proovedores
              </NavLink>
            </NavItem>
          </Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Reportes</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="/admin/bitacora">
              <i className="fa fa-list text-pink" aria-hidden="true"></i>
                Bitácora
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/facturacion">
                <i className="ni ni-money-coins text-pink" />
                Facturación
              </NavLink>
            </NavItem>
          </Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Seguridad</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="/admin/usuarios">
                <i className="ni ni-circle-08 text-green" />
                Usuarios
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/cajas">
                <i className="ni ni-shop text-green" />
                Cajas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/consecutivos">
                <i className="ni ni-ui-04 text-green" />
                Consecutivos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/paises">
                <i className="ni ni-world text-green" />
                Países
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/roles">
                <i className="ni ni-briefcase-24 text-green" />
                Roles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/medidas">
                <i className="ni ni-ruler-pencil text-green" />
                Medidas
              </NavLink>
            </NavItem>
          </Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Documentation</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="https://www.creative-tim.com/learning-lab/nextjs/overview/argon-dashboard?ref=njsad-admin-sidebar">
                <i className="ni ni-spaceship" />
                Getting started
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.creative-tim.com/learning-lab/nextjs/colors/argon-dashboard?ref=njsad-admin-sidebar">
                <i className="ni ni-palette" />
                Foundation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.creative-tim.com/learning-lab/nextjs/avatar/argon-dashboard?ref=njsad-admin-sidebar">
                <i className="ni ni-ui-04" />
                Components
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link href="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
};

export default Sidebar;
