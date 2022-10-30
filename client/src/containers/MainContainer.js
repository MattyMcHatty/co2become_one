import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage';
import Impact from '../components/Impact';
import UserComparisons from '../components/UserComparisons';
import HintsPage from '../components/HintsPage';
import ErrorPage from '../components/ErrorPage';
import { getFootprints } from '../components/FootprintsService';



const MainContainer = () => {

    const [footprints, setFootprints] = useState([]);

    useEffect(() => {
        getFootprints().then((allFootprints) => {setFootprints(allFootprints)});
    }, [])

    const addFootprint = (footprint) => {
        const temp = footprints.map(s => s);
        temp.push(footprint);
        setFootprints(temp);
    }



    return (
        
        <main>
            <Router>
                <NavBar />
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/impact" element={<Impact footprints={footprints} addFootprint={addFootprint}/>} />
                        <Route exact path="/usercomparisons" element={<UserComparisons footprints={footprints} />} />
                        <Route exact path="/hints" element={<HintsPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>


                
            </Router>
        </main>
    )
}

export default MainContainer