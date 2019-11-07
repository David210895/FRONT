import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { VideoDetail } from "./components";
import PrivateRoute from "../../routes/private-router";

function RoutingVideos(props) {
  const {
    match: { path }
  } = props;

  return (
    <Switch>
      <PrivateRoute path={`${path}`} component={VideoDetail} />
    </Switch>
  );
}

export { RoutingVideos };
