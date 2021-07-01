import React from 'react'
import { Redirect, Route} from 'react-router-dom'


function PrivateRoute({ component: Component, ...rest }) {
    const isAuth = localStorage.getItem("token")
    const role =localStorage.getItem("role")
    

    if((isAuth)&&(role==="admin")) {
        return  <Route component={Component}{...rest} />
    } 
    return <Redirect path="/" />
}

export default PrivateRoute