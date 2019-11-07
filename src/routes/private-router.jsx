import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// function PrivateRoute({ component: Component, auth, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (auth.isLoading) {
//           return <h2>Loading...</h2>;
//         } else if (auth.isAuthenticated) {
//           return <Redirect to="/home" />
//         } else {
//           return <Component {...props} />
//         }
//       }}
//     />
//   )
// }
const PrivateRoute = ({ component:Component, ...rest }) => {
  const userLogged = localStorage.getItem('token');
  console.log('userLogued',userLogged);
  if ( !userLogged ){
      return <Redirect to="/login" />
  }
  return <Route {...rest} component = { Component } />
}
const mapStateToProps = state => ({
  auth: state.Auth
});
export default connect(mapStateToProps)(PrivateRoute);