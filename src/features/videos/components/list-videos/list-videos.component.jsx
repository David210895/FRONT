import React from "react";
import { VideoComponent } from "../";
import "./list-videos.scss";

function ListVideos(props) {
  const { videos, onClick = () => {} } = props;
  return (
    <ul className="list-videos">
      {videos.map(video => (
        <li key={video.id}>
          <VideoComponent
            className="list-videos__video"
            buy={false}
            controls={false}
            {...video}
            onClick={
              () => {onClick(video)}
            }
          />
        </li>
      ))}
    </ul>
  );
}

export { ListVideos };
