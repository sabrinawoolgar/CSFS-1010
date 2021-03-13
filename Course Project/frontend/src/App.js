import React from 'react'
import './App.css'
import Header from "./components/Shared/header"
import Home from "./components/Pages/HomePage"
import Portfolio from "./components/Pages/PortfolioPage"
import Resume from "./components/Pages/ResumePage"
import Contact from "./components/Pages/ContactPage"
import Login from "./components/Pages/LoginPage"
import Listing from "./components/Pages/ListingPage"
import PrivateRoute from "./components/Shared/PrivateRoute"
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route path ="/PortfolioPage" component={Portfolio} />
            <Route path ="/ResumePage" component={Resume} />
            <Route path ="/ContactPage" component={Contact} />
            <Route path ="/LoginPage" component={Login} />
            <PrivateRoute path="/submissions">
                <Listing />
          </PrivateRoute>
        </Switch>
    </BrowserRouter>
)
}

export default App;
