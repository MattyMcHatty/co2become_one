import React from 'react';
import './TranquilityPage.css'
import { Link } from 'react-router-dom';

const TranquilityPage = () => {
    
    return(
        <>
        <main className="tranquil">
        <h2>Experience the tranquility of a net zero world</h2>
        <h2>One where everyone has a low carbon footprint.</h2>
        <audio controls autoPlay><source src="https://cdn.pixabay.com/download/audio/2022/02/07/audio_6666f206aa.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3" type="audio/mp3" ></source></audio>
        <br></br>
        <br></br>
        <Link to="/worldonfire"><button>Click Me to Find Out What Will Happen If You Don't Reduce Your Carbon Footprint</button></Link>
        </main>
        </>


    )

}

export default TranquilityPage;