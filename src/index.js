import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import App from './App'

import { mainRouter } from "./routes";//不需要登录就可以访问的页面

render(
    <Router>
        <Switch>
            {/*<Route path="/" component={App}/>*/}
            <Route path="/admin" render={(routerProps) => {
                return <App  {...routerProps}/>
            }}/>
            {
                mainRouter.map(route => {
                    return <Route key={route.pathname} path={route.pathname} component={route.component}/>
                })
            }
            <Redirect to="/admin" exact from="/"/>
            <Redirect to="/404"/>
        </Switch>
    </Router>,
    document.querySelector("#root")
);
