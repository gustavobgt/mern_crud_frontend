import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Dashboard from '../pages/User/Dashboard';
import { NotFound } from './NotFound';
import { ROOT, REGISTER, DASHBOARD } from "./CONSTANTS"

export const RouterConfig:React.FC = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Login} />
                <Route exact path={REGISTER} component={Register} />
                
                <Route exact path={DASHBOARD} component={Dashboard} />

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}
