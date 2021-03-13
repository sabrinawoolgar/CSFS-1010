import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
        return (
                <header>
                    <h1>Sabrina Woolgar</h1>
                        <nav>
                            <NavLink to = "/">home</NavLink>
                            <NavLink to = "/PortfolioPage">portfolio</NavLink>
                            <NavLink to = "/ResumePage">resume</NavLink>
                            <NavLink to = "/ContactPage">contact</NavLink>
                            <NavLink to = "/LoginPage">log in</NavLink>
                            <NavLink to = "/SubmissionsPage">submissions</NavLink>
                        </nav>
                </header>
        )
}

export default Header;


