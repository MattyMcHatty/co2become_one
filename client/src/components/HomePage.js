import React from 'react'
import styled from 'styled-components'

const TeamList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-around;

`

const TeamMember = styled.li`
    color: #00802b;
    border: 2px solid #00802b;
    border-radius: 8px;
    padding: 5px;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #b3ffb3;
    text-shadow: none;
`

const HomePage = () => {
    return (
        <>
        <h2>Welcome to CO2 Become One</h2>
        <main>Calculate your carbon footprint score today and check out our handy tips to figure out how 
            you can become one with mother nature.
        </main>
        <br></br>
        <footer>
            <h3>Our Team</h3>
            <TeamList>
                <TeamMember>
                    Lucy Collins
                    <br></br>
                    <br></br>
                    <img src="https://ca.slack-edge.com/T0TN401HD-U03U55RK01E-a8dd716e46c8-512" alt="" height="250px" width="250px"/>
                </TeamMember>
                <TeamMember>
                    Matthew Arthur
                    <br></br>
                    <br></br>
                    <img src="https://ca.slack-edge.com/T0TN401HD-U03T0T3G4UX-650fe21a87dc-512" alt="" height="250px" width="250px"/>
                </TeamMember>
                <TeamMember>
                    Colin Cameron
                    <br></br>
                    <br></br>
                    <img src="https://ca.slack-edge.com/T0TN401HD-U03T0T3TNET-f3a9457c7e38-512" alt="" height="250px" width="250px"/>
                </TeamMember>
            </TeamList>

        </footer>
        </>
    )
}

export default HomePage