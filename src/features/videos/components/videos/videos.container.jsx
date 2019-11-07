import React from "react";
import { VideoComponent } from "..";
const videos = [
  {
    id: 1,
    course: "Javascript",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
  ratione perferendis aut fugiat libero nobis doloribus laborum
  repudiandae eos mollitia!`,
    poster: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png`,
    urlVideo: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 2,
    course: "HTML5",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
  ratione perferendis aut fugiat libero nobis doloribus laborum
  repudiandae eos mollitia!`,
    poster: `http://elearningmasters.galileo.edu/wp-content/uploads/2018/05/01-1.jpg`,
    urlVideo: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 3,
    course: "CSS3",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
  ea, vero maiores delectus voluptates placeat ad beatae quaerat alias
  ratione perferendis aut fugiat libero nobis doloribus laborum
  repudiandae eos mollitia!`,
    poster: `https://www.multiplicalia.com/wp-content/uploads/2013/06/css3.jpg`,
    urlVideo: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
];
function Videos() {
  return (
    <>
      <div className="videos row">
        {videos.map(video => (
          <div className="col-lg-4 col-md-6 mb-4">
            <VideoComponent key={video.id} {...video} className="videos__video" />
          </div>
        ))}
      </div>
    </>
  );
}

export { Videos };
