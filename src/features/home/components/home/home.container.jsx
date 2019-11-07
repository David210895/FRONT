import React, { Component } from 'react';
import '../../../../assets/styles/core.scss';
import {
    Header,
    Footer,
    Landing,
    CardMentor
} from '../../../../components';
import { getMentorsAll } from '../../store/actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HomeContainer extends React.Component {
    componentDidMount() {
        // this.props.getMentorsAll();
    }
    render() {
        const mentores = this.props.Mentors.data;
        return (
            <>
                <Header />
                <Landing />
                <main>
                    <section class="mentor">
                        <div class="container">
                            <div class="wrap-mentor d-flex-aling-center">
                                <div class="mentor-text">
                                    <h2>Cursos ofrecidos</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ab illo iste veritatis ex ipsam ducimus sapiente consequatur, non consectetur unde pariatur facere omnis fugit amet natus eos! Nisi, voluptates!</p>
                                    <div class="btn">
                                        <button class="landing-btn"> <Link to="/videos">Cursos</Link> <i class="fas fa-arrow-right"></i> </button>
                                    </div>
                                </div>
                                <figure class="mentoring-img">
                                    <img src="img/mentoring.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </section>
                    <section class="topmentor">
                        <div class="container">
                            <div class="topmentor-wrap">
                                <div class="topmentor-wrap-content">
                                    <div class="topmentor-img">
                                        <h2>Los mas buscados...</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ad iste accusamus magni sed rerum accusantium unde quo quod ducimus.</p>
                                        <figure class="b-color">
                                            <img src="img/color4.png" alt="" />
                                        </figure>
                                        <div class="topmentorcolor"></div>
                                    </div>
                                </div>

                                <div class="card-content d-flex-wrap d-flex-center">
                                    {

                                        mentores.map(mentor => {
                                            return (
                                                <CardMentor
                                                    key={mentor.id}
                                                    id={mentor.id}
                                                    imagen={mentor.user.picture}
                                                    descripcion={mentor.description}
                                                    nombre={mentor.user.name + ' ' + mentor.user.lastname}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer />
            </>
        );
    };
}

const mapStateToProps = state => ({
    Mentors: state.Mentors
});

const mapDispatchToProps = {
    getMentorsAll
};

const Home = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));

export {
    Home
}