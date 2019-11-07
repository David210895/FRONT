import React from 'react';
import '../../../../assets/styles/core.scss';
import { Header, Footer, Landing } from '../../../../components';

const DetailMentor = (props) => {
    return (
        <>
            <Header />
            <Landing />
            <main>
                <section>
                    <div class="container">
                        <div class="profilementor d-flex">

                            <div class="profile-wrap text-center">
                                <figure class="text-center">
                                    <img src="img/face.png" alt="" class="face" />
                                </figure>
                                <div class="rate">
                                    <span>5.0</span>
                                    <div class="stars d-flex">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <div class="card-btn">
                                        <button>Contratar</button>
                                    </div>
                                </div>
                            </div>

                            <div class="profile-content">
                                <div class="profile-wrap-skills">
                                    <p class="name">Jhon Doe</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptas corporis nesciunt repellendus dignissimos! Beatae, culpa, dolor officia repudiandae eveniet vero soluta autem alias non dolorem minus enim ipsam quam.</p>
                                </div>

                                <div class="barra-wrap">
                                    <div class="profile-skills-mentor d-flex">
                                        <p>Angular</p>
                                        <div class="barra">
                                            <div class="relleno d-flex-center d-flex-aling-center ">
                                                80%
                                </div>
                                        </div>
                                    </div>

                                    <div class="profile-skills-mentor d-flex">
                                        <p>React</p>
                                        <div class="barra">
                                            <div class="relleno d-flex-center d-flex-aling-center ">
                                                80%
                                  </div>
                                        </div>
                                    </div>

                                    <div class="profile-skills-mentor d-flex">
                                        <p>Redux</p>
                                        <div class="barra">
                                            <div class="relleno d-flex-center d-flex-aling-center ">
                                                80%
                                    </div>
                                        </div>
                                    </div>

                                    <div class="profile-skills-mentor d-flex">
                                        <p>Angular</p>
                                        <div class="barra">
                                            <div class="relleno d-flex-center d-flex-aling-center ">
                                                80%
                                      </div>
                                        </div>
                                    </div>

                                    <div class="profile-skills-mentor d-flex">
                                        <p>Angular</p>
                                        <div class="barra">
                                            <div class="relleno d-flex-center d-flex-aling-center ">
                                                80%
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            .
                </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
export {
    DetailMentor
}