import React from 'react';
import { Link } from 'react-router-dom'
import './WorldOnFire.css'
// import styled from "styled-components";

// const BurningText = styled.hd`
// color: red;
// `

const WorldOnFire = () => {

    return(
        <>
        <main className="burn">
            
        <h2 className='burn'>THE EARTH HAS BEEN DESTROYED</h2>
        <h2 className='burn'>GLOBAL WARMING HAS RESULTED IN THE END OF THE HUMAN RACE</h2>
        <audio controls autoPlay><source src="https://cdn.pixabay.com/download/audio/2022/01/20/audio_3cf7c6e6ec.mp3?filename=frantic-15190.mp3" type="audio/mp3" ></source></audio>
        <br></br>
        <br></br>
        {/* <button onClick={clickTranquilToggle}>Click Me to Find Out What Will Happen If You Don't Reduce Your Carbon Footprint</button> */}
        <Link to="/tranquility"><button>Return to tranquility</button></Link>

        </main>
        </>

    )

}

export default WorldOnFire;