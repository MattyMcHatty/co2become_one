import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.ul`
background: #b3ffb3;
display: flex;
justify-content: space-evenly;
padding: 2em;
list-style-type: none;`

const NavLinks = styled.li`
font-size:1 rem;
a:visited {color: red}
a:hover {color: black}`


const NavBar = () => {


    return (
        <NavContainer>
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
    </NavContainer>
    )
}

export default NavBar