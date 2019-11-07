import React from 'react';
import '../../assets/styles/core.scss';
import { Link } from 'react-router-dom';

const Landing = (props) => {
    return (
        <div class="landing">

            <div class="container">

                <div class="wrap-landing d-flex">
                    <div class="landing-text">
                        <h1>
                            Skills   <br /> Mentor</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, aut. Non mollitia nulla porro et? Enim ratione praesentium asperiores? s quos.</p>
                        <div class="btn">
                            <button class="landing-btn"> <Link to=''>Learn more</Link> <i class="fas fa-arrow-right"></i> </button>

                        </div>
                    </div>
                    <div class="landing-img">
                        <figure>
                            <img src="/img/skill.png" alt="" />
                        </figure>
                    </div>
                </div>
                <div class="animation text-center d-flex-column">
                    <a class="fas fa-angle-double-down"></a>
                </div>
            </div>
        </div>

    );
}

export {
    Landing
}