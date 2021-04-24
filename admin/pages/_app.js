import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router, { useRouter } from "next/router";

import PageChange from "components/PageChange/PageChange.js";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/nextjs-argon-dashboard.scss";
import AuthService from "../services/auth.service";

Router.events.on("routeChangeStart", async (url) => {
  //if(!await AuthService.current()) Router.push('/auth/login')
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  async componentDidMount() {
    let comment = document.createComment(``);
    document.insertBefore(comment, document.documentElement);
    require('sweetalert2');


    const page = Router.pathname
    const acPage = page.split('/').pop()
    const user = await AuthService.current()

    console.log(page, user)

    if(user) {
      const roles = user.roles.map(rol => { return rol.nombre })
      console.log(roles)
      if(page.includes('/auth/login')) {
        console.log('xDD')
        Router.push(user.empleado ? '/client/dashboard' : '/admin/dashboard')
      }

      if(page.includes('/admin') && user.empleado) {
        Router.push('/client/dashboard')
      }

      if(page.includes('/client') && !user.empleado) {
        Router.push('/admin/dashboard')
      }

      if(page.includes('/client') && !user.empleado) {
        Router.push('/admin/dashboard')
      }

      if(['usuarios', 'cajas', 'consecutivos', 'paises', 'roles', 'medidas'].includes(acPage) && !(roles.includes('Administrador') || roles.includes('Seguridad'))) {
        Router.push('/admin/dashboard')
      }

      if(['restaurantes', 'buffet', 'bebidas', 'especialidades', 'mesas', 'empleados', 'puestos'].includes(acPage) && !(roles.includes('Administrador'))) {
        Router.push('/admin/dashboard')
      }

      if(['marcas', 'comestibles', 'productos', 'proveedores'].includes(acPage) && !(roles.includes('Administrador'))) {
        Router.push('/admin/dashboard')
      }

      if(['bitacora', 'facturacion'].includes(acPage) && !(roles.includes('Administrador') || roles.includes('Cuentas'))) {
        Router.push('/admin/dashboard')
      }
   
    } else {
      console.log('uwu')
      Router.push('/auth/login')
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Divudici</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
