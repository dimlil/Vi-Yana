import React from 'react'
import './Navigation.module.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Footer from './Components/footer/Footer'
export default function Navigation() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    )
}
