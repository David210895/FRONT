import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import "./video.component.scss";

function Video(props) {
  const {
    id,
    course,
    description,
    poster,
    urlVideo,
    history,
    className = ""
  } = props;

  console.log("props", props);

  function handleBuy() {
    history.push({
      pathname: `/pagar`,
      search: `?course=${id}`,
      state: { detail: "sebas" }
    });
  }

  function handleDetail() {
    history.push({
      pathname: `/curso/${id}`,
      // search: `?course=${id}`,
      // state: { detail: "sebas" }
    });
  }

  return (
    <div className={`video ${className}`}>
      <video controls={urlVideo} preload="none" poster={poster}>
        <source src={urlVideo} type="video/mp4" />
        Tu navegador no soporta la etiqueta video
      </video>
      <div className="video__body">
        <h2 onClick={handleDetail}>Curso: {course}</h2>
        <p>{description}</p>
        <Button onClick={handleBuy} className="mt-4" type="primary" block ghost>
          Comprar ahora
        </Button>
      </div>
    </div>
  );
}

export const VideoComponent = withRouter(Video);
