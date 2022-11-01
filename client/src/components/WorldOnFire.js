import React from 'react';
import { Link } from 'react-router-dom'
import './WorldOnFire.css'

const WorldOnFire = () => {

    return(
        <>
        <main className="burn">

        <h2 className='burn'>THE EARTH HAS BEEN DESTROYED</h2>
        <h2 className='burn'>GLOBAL WARMING HAS RESULTED IN THE END OF THE HUMAN RACE</h2>
        <audio controls autoPlay><source src="https://cdn.pixabay.com/download/audio/2022/01/20/audio_3cf7c6e6ec.mp3?filename=frantic-15190.mp3" type="audio/mp3" ></source></audio>
        <br></br>
        <br></br>
        <Link to="/tranquility"><button>Return to tranquility</button></Link>
        <br></br>
        <br></br>
        <img src="https://media.tenor.com/Qy4dAOV73dcAAAAM/skeleto-skeleton.gif)" height="500" width="500" />
        </main>
        </>

    )

}

export default WorldOnFire;