import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import "./video.component.scss";

function Video(props) {
  let myRef = React.createRef();
  const {
    id,
    course,
    description,
    poster,
    urlVideo,
    titleVideo,
    history,
    className = "",
    buy = true,
    controls = true,
    autoplay = false,
    onClick = () => {},
    ref
  } = props;

  function handleBuy() {
    history.push({
      pathname: `/pagar`,
      search: `?course=${id}`,
      state: { detail: "sebas" }
    });
  }

  function handleDetail() {
    history.push({
      pathname: `/curso`,
      search: `?course=${id}`,
      state: { detail: "sebas" }
    });
  }

  return (
    <div ref={myRef} className={`video ${className}`} onClick={onClick}>
      <video controls={controls} preload="none" poster={poster}>
        <source src={urlVideo} type="video/mp4" />
        Tu navegador no soporta la etiqueta video
      </video>
      <div className="video__body">
        {titleVideo && <h2 className="video__title">{titleVideo}</h2>}
        <h2 className="video__course" onClick={handleDetail}>
          Curso: {course}
        </h2>
        <p>{description}</p>
        {buy ? (
          <Button
            onClick={handleBuy}
            className="mt-4"
            type="primary"
            block
            ghost
          >
            Comprar ahora
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export const VideoComponent = withRouter(Video);
