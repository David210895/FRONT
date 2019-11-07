import React from "react";
import { VideoComponent } from "..";

function ListVideos(props) {
  const { videos } = props;
  console.log("videos:", videos);
  return (
    <ul>
      {videos.map(video => (
        <li>
          <VideoComponent key={video.id} {...video} />
        </li>
      ))}
    </ul>
  );
}

function VideoDetail() {
  const detailVideo = {
    id: 1,
    course: "Javascript",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
    ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
    ratione perferendis aut fugiat libero nobis doloribus laborum
    repudiandae eos mollitia!`,
    poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
    urlVideo: "https://www.w3schools.com/html/mov_bbb.mp4"
  };

  const videos = [
    {
      id: 1,
      course: "javascript",
      poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
      url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
      id: 2,
      course: "javascript",
      poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
      url: "https://www.w3schools.com/tags/movie.mp4"
    }
  ];

  return (
    <>
      <div className="video-detail container">
        <div className="row">
          <div className="col col-8">
            <VideoComponent {...detailVideo} />
          </div>
          <div className="col col-4">
            <ListVideos videos={videos} />
          </div>
        </div>
      </div>
    </>
  );
}
export { VideoDetail };
