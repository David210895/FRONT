import React from 'react';
import '../../assets/styles/core.scss';
import { Link } from 'react-router-dom';
const CardMentor = (props) => {
    const{
        id,
        descripcion,
        imagen,
        nombre
    }=props;
    return (
        <div class="card">
            <div class="card-wrap">

                <figure class="d-flex-aling-center">
                    <img src="img/face.png" alt="" class="card-img" />
                    <div>
                        <p class="mentorname">{nombre}</p>
                    </div>
                </figure>

                <div class="card-text">
                    <div class="mentorsubtitle">
                        <span>Web Programing Developer</span>
                    </div>
                    <div class="card-text-p">
                        <p>{descripcion}</p>
                    </div>
                </div>

                <figure class="text-center">
                    <img src={imagen} alt="" class="img-code" />
                </figure>

                <div class="lenguajes">
                    <ul class="d-flex-center">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Redux</li>
                        <li>Angular</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>TypeScript</li>
                    </ul>
                </div>

                <div class="lenguajes-btn">
                    <Link to={`/mentors/${id}`}>Ir a <i class="fas fa-arrow-right"> </i></Link>
                </div>

            </div>
        </div>



    );
}

export {
    CardMentor
}