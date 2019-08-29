import React from 'react';
import Logo from './../../../../../Assets/Images/logo.png';
import { Link, Route } from "react-router-dom";

export default function Unauthenticated() {
  return (
    <nav className="navbar header-navbar pcoded-header">
        <div className="navbar-wrapper">
            <div className="navbar-logo navbar-logo-center">
                <Link to={`/`}>
                    <img className="img-fluid" src={Logo} alt="Theme-Logo" />
                </Link>
            </div>
            <div className="navbar-container container-fluid">
                <ul class="nav-left">
                    <li class="user-profile header-notification">
                        <div class="dropdown-primary dropdown">
                            <div class="dropdown-toggle" data-toggle="dropdown">
                                <button class="btn btn-simple">
                                    Sobre
                                </button>
                            </div>
                            <ul class="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                                <li>
                                    <Link to={`/sobre`}>
                                        <i class="fas fa-search-dollar"></i> Sobre Nós
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/como-funciona`}>
                                        <i class="fas fa-question"></i> Como Funciona
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/onde-estamos`}>
                                        <i class="fas fa-map-marker-alt"></i> Onde Estamos
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`/impacto`}>
                                        <i class="fas fa-chart-pie"></i> Impacto
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to={`/blog`}>
                            <button class="btn btn-simple">
                                Blog
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/doe`}>
                            <button class="btn btn-simple">
                                Doar
                            </button>
                        </Link>
                    </li>
                </ul>
                <ul className="nav-right">
                    <li>
                        <Link to={`/registro`}>
                            <button class="btn waves-effect waves-light btn-primary">
                                Registro
                            </button>
                        </Link >
                    </li>
                    <li>
                        <Link to={`/entrar`}>
                            <button class="btn waves-effect waves-light btn-primary">
                                Entrar
                            </button>
                        </Link >
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    </nav>
  );
}