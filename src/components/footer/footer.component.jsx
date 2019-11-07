import React from 'react';
import '../../assets/styles/core.scss';

const Footer = (props) => {
    return (
        <footer>
            <div class="container">
                <div class="footer-wrap d-flex-between">
                    <div class="footer-content">
                        <div class="footer-logo">
                            <h3>Logo</h3>
                        </div>
                        <div class="footer-about">
                            <h3>Acerca de nostros</h3>
                            <p>Queremos hacer que aprender sea
                  facil y una experiencia única</p>
                        </div>
                        <div class="footer-contact">
                            <div class="footer-contact-content">
                                <h3>Contactanos</h3>
                                <p><i class="fas fa-phone"></i> +51 999 999 999</p>
                                <p><i class="fas fa-envelope-open-text"></i> mentores@mentores.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="information">
                        <h3>Informacion</h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Mentoria</a></li>
                            <li><a href="">Servicios</a></li>
                            <li><a href="">Contactanos</a></li>
                        </ul>
                    </div>
                    <div class="footer-help">
                        <h3>Enlaces de ayuda</h3>
                        <ul>
                            <li><a href="">Servicios</a></li>
                            <li><a href="">Becas</a></li>
                            <li><a href="">Condiciones y Terminos</a></li>
                            <li><a href="">Politica de Privacidad</a></li>
                        </ul>
                    </div>
                    <div class="footer-up d-flex-aling-center">
                        <a href="/"><i class="fas fa-arrow-up"></i></a>
                    </div>
                </div>
                <div class="footer-wrap-icons d-flex-between d-flex-aling-center">
                    <div class="icons-social d-flex">
                        <i class="fab social fa-facebook"></i>
                        <i class="fab social fa-google"></i>
                        <i class="fab social fa-twitter-square"></i>
                        <i class="fab social fa-instagram"></i>
                    </div>
                    <div class="dreservados">
                        <p>2019 Todos los derechos reservados Mentores.com </p>
                    </div>
                </div>
            </div>
        </footer>

    );
}
export {
    Footer
}