import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { LoginContainer } from "../features/auth";
import { RoutingHome } from "../features/home";
import { RegisterContainer } from "../features/register";
import { Mentors } from "../features/mentors";
import { DetailMentor } from "../features/detailMentor";
import { Videos, VideoDetail } from "../features/videos";
import { ProfileMentor } from "../features/profileMentor";
/* import { HomeContainer } from '../features/home'; */

function RoutingRoot() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={RoutingHome} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/mentors/:id" component={DetailMentor} />
        <Route exact path="/mentors" component={Mentors} />
        <Route exact path="/videos" component={Videos} />
        <Route path="/curso/:id" component={VideoDetail} />
        <Route path="/busqueda" component={ProfileMentor} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}
export { RoutingRoot };
