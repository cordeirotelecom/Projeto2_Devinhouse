import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import NewMessage from '../pages/Mensagens'
import MessageList from '../pages/Lista'
// import SignIn from '../pages/SignIn'

const Routes = () => {
    return (

        <Switch>

            <Route path="/list">
                <MessageList />
            </Route>

            <Route path="/message">
                <NewMessage />
            </Route>

            <Route path="/SignIn">
                <NewMessage />
            </Route>

            <Route path="/" exact>
                <Dashboard />
            </Route>
            
        </Switch>

    )
}

export default Routes