import React from 'react'
import styled from 'styled-components'

const TeamList = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-around;

`

const HomePage = () => {
    return (
        <>
        <h2>Welcome to CO2 Become One</h2>
        <main>Calculate your carbon footprint score today and check out our handy tips to figure out how 
            you can become one with mother nature.
        </main>
        <footer>
            <h3>Our Team</h3>
            <TeamList>
                <li>
                    Lucy Collins
                    <br></br>
                    <img src="https://ca.slack-edge.com/T0TN401HD-U03U55RK01E-a8dd716e46c8-512" height="250px" width="250px"/>
                </li>
                <li>
                    Matthew Arthur
                    <br></br>
                    <img src="https://ca.slack-edge.com/T0TN401HD-U03T0T3G4UX-650fe21a87dc-512" height="250px" width="250px"/>
                </li>
                <li>
                    Colin Cameron
                    <br></br>
                    <img src="https://ca.slack-edge.com/T0TN401HD-U03T0T3TNET-f3a9457c7e38-512" height="250px" width="250px"/>
                </li>
            </TeamList>

        </footer>
        </>
    )
}

export default HomePage