import React, { Component } from "react";
import { VideoComponent, ListVideos } from "..";
import "./detail.scss";

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

const detailVideo = {
  id: 1,
  course: "Javascript",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
  ratione perferendis aut fugiat libero nobis doloribus laborum
  repudiandae eos mollitia!`,
  poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
  urlVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
  titleVideo: "Introduccion"
};

const videos = [
  {
    id: 1,
    course: "javascript",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
  ratione perferendis aut fugiat libero nobis doloribus laborum
  repudiandae eos mollitia!`,
    poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
    urlVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
    titleVideo: "Introduccion"
  },
  {
    id: 2,
    course: "javascript",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
  ratione perferendis aut fugiat libero nobis doloribus laborum
  repudiandae eos mollitia!`,
    poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
    urlVideo: "https://www.w3schools.com/tags/movie.mp4",
    titleVideo: "POO"
  },
  {
    id: 3,
    course: "javascript",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
  ratione perferendis aut fugiat libero nobis doloribus laborum
  repudiandae eos mollitia!`,
    poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
    urlVideo: "https://www.w3schools.com/tags/movie.mp4",
    titleVideo: "AJAX"
  },
  {
    id: 4,
    course: "javascript",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
  ratione perferendis aut fugiat libero nobis doloribus laborum
  repudiandae eos mollitia!`,
    poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
    urlVideo: "https://www.w3schools.com/tags/movie.mp4",
    titleVideo: "DOM"
  }
];

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, detailVideo);
  }

  handleSelectVideo = props => {
    this.setState(props);
    document.querySelector(".video-detail__video video").load();
    document.querySelector(".video-detail__video video").play();
  };

  render() {
    return (
      <>
        <div className="video-detail container">
          <div className="row">
            <div className="col col-8">
              <VideoComponent className="video-detail__video" {...this.state} />
            </div>
            <div className="col col-4 p-relative">
              <ListVideos
                className="video-detail__list"
                videos={videos}
                onClick={this.handleSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { VideoDetail };
