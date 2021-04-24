import React, { useState, useEffect } from "react";
import Link from "next/link";
import AuthService from "../../services/auth.service";

// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";
import { useRouter } from "next/router";

function AdminNavbar({ brandText }) {
  const auth = new AuthService()
  const router = useRouter();
  const [user, setUser] = useState({})

  const onLogout = async (e) => {
    e.preventDefault()
    await auth.logout()
    router.push('/auth/login')
  }
 
  useEffect(async () => {
    let _user = await AuthService.current()
    if(_user) setUser(_user)
  }, [])

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link href={user.empleado ? '/client/dashboard' : '/admin/dashboard'}>
            <a className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
              { user.empleado ? user.empleado.restaurante.nombre : null }
            </a>
          </Link>
       
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={require("assets/img/theme/icon.png")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {user.nombre} {user.apellidos}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Bienvenido!</h6>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => onLogout(e)}>
                  <i className="ni ni-user-run" />
                  <span>Cerrar Sesion</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
