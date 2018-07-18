import React from 'react';
import  { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({ 
    isAunthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAunthenticated ? (
            <Redirect to="/dashboard" />            
        ) : (
               <Component {...props} />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAunthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute);
