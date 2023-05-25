import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseContextWrapper from './components/common/BaseContext'
import Home from './pages/Home'
import User from './pages/User'


export default function App() {
    return (
        <BrowserRouter>
            <BaseContextWrapper>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/user/:id" component={User} exact />
                </Switch>
            </BaseContextWrapper>
        </BrowserRouter>
    )
}
