import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { IAppBar } from '../../../../components/appBar';

class MentorsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.goTo = this.goTo.bind(this);
    }

    goTo(path) {
        this.props.history.push(path);
    }

    render() {
        const {
            results,
            goTo
        } = this.props;
        const isEmpty = results.length === 0;
        return (
            <>
                {console.log('tamaño: ', results.length)}
                <IAppBar />
                <section className="mentoring-four">
                    <div className="container pb-4">
                        <div className="cards-wrap d-flex-wrap">
                            {
                                isEmpty ?
                                    <h1>
                                        There are no results
                                    </h1>
                                    :
                                    results.map(item =>
                                        <div className="mentoring-card d-flex" onClick={() => goTo(`/details/${item.id}`)}>
                                            <figure className="d-flex-aling-center">
                                                <img src={item.image} alt={item.image} />
                                            </figure>
                                            <div className="mentoring-card-wrap">
                                                <div className="mentoring-card-content">
                                                    <h4>{item.title}</h4>
                                                    <span className="exp">Experienced Full-Stack Web Developer</span>
                                                    <p>{item.content}</p>
                                                </div>
                                                <div className="leng-icons">
                                                    <i className="fab fa-python"></i>
                                                    <i className="fab fa-react"></i>
                                                    <i className="fab fa-css3-alt"></i>
                                                    <i className="fab fa-html5"></i>
                                                    <i className="fas fa-file-code"></i>
                                                    <i className="fab fa-sass"></i>
                                                    <i className="far fa-gem"></i>
                                                </div>
                                                <div className="rate d-flex-between">
                                                    <p>Nivel Avanzado</p>
                                                    <div className="stars">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

const mapStateToProps = state => ({
    results: state.results,
});


const Mentors = withRouter(connect(mapStateToProps)(MentorsContainer));

export {
    Mentors
}
