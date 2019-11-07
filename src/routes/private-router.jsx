import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLogged = localStorage.getItem('token');
  console.log('userLogued', userLogged);
  if (!userLogged) {
    return <Redirect to="/login" />
  }
  return <Route {...rest} component={Component} />
}
const mapStateToProps = state => ({
  auth: state.Auth
});
export default connect(mapStateToProps)(PrivateRoute);