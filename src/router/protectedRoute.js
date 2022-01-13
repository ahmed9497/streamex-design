import React, { useState } from "react";
import MainTemplate from './../templates/mainTemplate';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {

   const {exact,path, component } = props;
   return (
          <React.Fragment>
            <MainTemplate path={path} component={component} exact={exact}/>
          </React.Fragment>
    );
}

export default ProtectedRoute;
