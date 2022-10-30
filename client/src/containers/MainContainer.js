import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage';
import Impact from '../components/Impact';
import UserComparisons from '../components/UserComparisons';
import HintsPage from '../components/HintsPage';
import ErrorPage from '../components/ErrorPage';



const MainContainer = () => {



    return (
        
        <main>
            <Router>
                <NavBar />
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/impact" element={<Impact />} />
                        <Route exact path="/usercomparisons" element={<UserComparisons />} />
                        <Route exact path="/hints" element={<HintsPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>


                
            </Router>
        </main>
    )
}

export default MainContainer