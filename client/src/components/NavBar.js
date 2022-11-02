import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.ul`
background: #b3ffb3;
display: flex;
justify-content: space-evenly;
align-items: end ;
padding: 1em;
list-style-type: none;`

const NavLinks = styled.li`
font-size:1 rem;
color: #00802b;
text-shadow: none;
a:visited {color: #00802b}
a:hover {color: black}
`

const logo = require('../images/co2becomeone_logo.png')

const NavBar = () => {

    return (
        <NavContainer>
            <span> <img src={logo} className="logo" alt=''/> </span>
            <NavLinks>
                <Link to="/">Home</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/impact">Calculate Your Impact</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/usercomparisons">Compare Users</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/hints">Hints</Link>
            </NavLinks>
            <NavLinks>
                <Link to="/tranquility">Tranquility</Link>
            </NavLinks>        
        </NavContainer>
    )
}

export default NavBar