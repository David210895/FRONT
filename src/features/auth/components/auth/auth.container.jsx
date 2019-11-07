import React, { Component } from 'react';
import {  Button, Typography } from 'antd';
import './auth.container.scss';
import imagen from '../../../../assets/images/coworking.jpg';
import WrappedLoginForm from './form/form';
import {NavLink} from 'react-router-dom';

const { Title } = Typography;


class LoginContainer extends Component {

    render() {
        return (
            <>
                <section className='container-login'>
                    <div className='container-img'>
                        <img src={imagen} alt="Imagen de Login" />
                    </div>
                    <div className="container-form">
                        <div className="login">
                            <Title level={2} className="center">Iniciar sesión :</Title>
                            <WrappedLoginForm/>
                            <div className="center mt-2"><NavLink to="/register">No esta registrado ? Regístrese</NavLink></div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export {
    LoginContainer
}