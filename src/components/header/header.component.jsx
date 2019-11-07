import React from 'react';
import '../../assets/styles/core.scss';
import { IAppBar } from '../../components';
import { connect } from 'react-redux';
import { logout } from '../../features/auth/store/actions';
import { Link } from 'react-router-dom';

class HeaderContainerLogic extends React.Component {
    constructor() {
        super();
        this.btn = React.createRef();
        this.headerMenu = React.createRef();
        this.cambiar = this.cambiar.bind(this);
        this.agregar = this.agregar.bind(this);
        this.userLogin = React.createRef();
        this.user = React.createRef();
        this.handlelLogoutSesion = this.handlelLogoutSesion.bind(this);

    }
    agregar(e) {
        this.userLogin.current.classList.toggle('active');
    }
    cambiar(e) {
        this.headerMenu.current.classList.toggle('header-toggle');
    }
    handlelLogoutSesion() {
        this.props.logout(this.props.token);
        localStorage.removeItem('user');
        localStorage.removeItem('password');
        console.log('Cerrando Cesion  e eliminando token');
    }
    render() {
        return (
            <header class="header" ref={this.headerMenu}>
                <div class="header-wrap">
                    <h2>Logo</h2>
                    <nav class="nav">
                        <ul>
                            <li class="search-t">
                                <input type="text" placeholder="Buscar Cursos..." class="inp-curso" />
                                <i class="fas fa-search" id="search"></i>
                            </li>
                            <li class="bd-t"><Link to='/home'>Home</Link></li>
                            <li><a href="#">Mentoria</a>
                                <ul class="sub-menu">

                                    <div class="flex">

                                        <li class="t-center"><a href="#" class="tittle-color">Front-End</a>

                                        </li>
                                        <ul class="menu-table">
                                            <li><a href="">React JS</a></li>
                                            <li><a href="">Angular</a></li>
                                            <li><a href="">Vue Js</a></li>
                                            <li><a href="">Redux</a></li>
                                            <li><a href="">Laravel</a></li>
                                        </ul>
                                    </div>

                                    <div class="flex">
                                        <li class="t-center"><a href="#" class="tittle-color">Back-End</a>
                                            <i class="fas fa-caret-right"></i>
                                        </li>
                                        <ul class="menu-table">
                                            <li><a href="">React JS</a></li>
                                            <li><a href="">Angular</a></li>
                                            <li><a href="">Vue Js</a></li>
                                            <li><a href="">Redux</a></li>
                                            <li><a href="">Laravel</a></li>
                                        </ul>
                                    </div>

                                    <div class="flex">
                                        <li class="t-center"><a href="#" class="tittle-color">Scrum Master</a>

                                        </li>
                                        <ul class="menu-table">
                                            <li><a href="">React JS</a></li>
                                            <li><a href="">Angular</a></li>
                                            <li><a href="">Vue Js</a></li>
                                            <li><a href="">Redux</a></li>
                                            <li><a href="">Laravel</a></li>
                                        </ul>
                                    </div>

                                </ul>

                                <ul class="sub-menu">

                                    <div class="flex">

                                        <li class="t-center"><a href="#" class="tittle-color">Front-End</a>

                                        </li>
                                        <ul class="menu-table">
                                            <li><a href="">React JS</a></li>
                                            <li><a href="">Angular</a></li>
                                            <li><a href="">Vue Js</a></li>
                                            <li><a href="">Redux</a></li>
                                            <li><a href="">Laravel</a></li>
                                        </ul>
                                    </div>

                                    <div class="flex">
                                        <li class="t-center"><a href="#" class="tittle-color">Back-End</a>

                                        </li>
                                        <ul class="menu-table">
                                            <li><a href="">React JS</a></li>
                                            <li><a href="">Angular</a></li>
                                            <li><a href="">Vue Js</a></li>
                                            <li><a href="">Redux</a></li>
                                            <li><a href="">Laravel</a></li>
                                        </ul>
                                    </div>

                                    <div class="flex">
                                        <li class="t-center"><a href="#" class="tittle-color">Scrum Master</a>

                                        </li>
                                        <ul class="menu-table">
                                            <li><a href="">React JS</a></li>
                                            <li><a href="">Angular</a></li>
                                            <li><a href="">Vue Js</a></li>
                                            <li><a href="">Redux</a></li>
                                            <li><a href="">Laravel</a></li>
                                        </ul>
                                    </div>

                                </ul>
                            </li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contactanos</a></li>
                            <li class="social">
                                <i class="fab icon fa-facebook"></i>
                                <i class="fab icon fa-twitter"></i>
                                <i class="fab icon fa-github"></i>
                                <i class="fab icon fa-linkedin-in"></i>
                            </li>

                        </ul>
                    </nav>

                    <div class="cont-wrap">
                        <div class="search">
                            <IAppBar class="inp-curso" />
                            <i class="fas fa-search" id="search"></i>
                        </div>
                        {
                            this.props.token ?
                                (<div class="user user-toggle" ref={this.user} onClick={this.agregar}>
                                    <div className="usuario"><h2>{(this.props.user.substring(0,1)).toUpperCase()}</h2></div>
                                    <div class="user-login" id="user-login" ref={this.userLogin}>
                                        <ul>
                                            <li><a href="">Profile</a></li>
                                            <li><a onClick={this.handlelLogoutSesion}>Logout</a></li>
                                        </ul>
                                    </div>
                                </div>)
                                :
                                (
                                    <div class="user user-toggle" ref={this.user} onClick={this.agregar}>
                                        <i class="far fa-user-circle"></i>
                                        <div class="user-login" id="user-login" ref={this.userLogin}>
                                            <ul>
                                                <li><Link to='/login'>Login</Link></li>
                                                <li><Link to='/register'>Registrarse</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                    <div class="toggle" onClick={this.cambiar} ref={this.btn} id="btn">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => ({
    token: state.Auth.token,
    user: state.Auth.user
});

const mapDispatchToProps = {
    logout
}

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerLogic)

export {
    Header
}