// import React from "react";
// import { connect } from 'react-redux';
// import { Redirect } from "react-router-dom";
// import PropTypes from 'prop-types'

// import { checkSession } from 'actions/authActions';

// const Protected = ({ component: Component, ...rest }) => {

//   rest.checkSession().then(() => {
//     if (!rest.isAuthenticated) {
//       console.log(rest.location);
//       return (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: rest.location }
//           }}
//         />
//       )
//     }
//     return true;
//   });

//   return <Component {...rest} />
// }


// Protected.propTypes = {
//   isAuthenticated: PropTypes.bool.isRequired
// }

// const mapStateToProps = state => ({
//   isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(
//   mapStateToProps,
//   { checkSession }
// )(Protected);