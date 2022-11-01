import React, { useState, useEffect } from 'react';
import './TranquilityPage.css'
import { Link } from 'react-router-dom';

const TranquilityPage = () => {

    // let [tranquilToggle, setTranquilToggle] = useState();
    // let [topText, setTopText] = useState("");
    // let [bottomText, setBottomText] = useState("");

    // const clickTranquilToggle = () => {
    //     if(tranquilToggle){
    //         setTranquilToggle(false);
    //     } else {
    //         setTranquilToggle(true);
    //     }
    // }

    // useEffect(()=> {
    //     if (tranquilToggle) {
    //         setTopText('Experience the tranquility of a net zero world');
    //         setBottomText('One where everyone has a low carbon footprint.')
    //     }
    //     else {
    //         setTopText('Burn in hell');
    //         setBottomText('MUTHAFUCKA')
    //     }
    // })
    
    return(
        <>

        <h2>Experience the tranquility of a net zero world</h2>
        <h2>One where everyone has a low carbon footprint.</h2>
        <audio controls autoPlay><source src="https://cdn.pixabay.com/download/audio/2022/02/07/audio_6666f206aa.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3" type="audio/mp3" ></source></audio>
        <br></br>
        <br></br>
        {/* <button onClick={clickTranquilToggle}>Click Me to Find Out What Will Happen If You Don't Reduce Your Carbon Footprint</button> */}
        <Link to="/worldonfire"><button>Click Me to Find Out What Will Happen If You Don't Reduce Your Carbon Footprint</button></Link>
        </>


    )

}

export default TranquilityPage;