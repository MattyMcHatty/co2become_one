import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage';
import Impact from '../components/Impact';
import UserComparisons from '../components/UserComparisons';
import HintsPage from '../components/HintsPage';
import ErrorPage from '../components/ErrorPage';
import { deleteFootprint, getFootprints } from '../components/FootprintsService';
import UpdateFootprint from '../components/UpdateFootprint';



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
  
    const updateFootprint = () => {
        getFootprints().then((allFootprints) => {setFootprints(allFootprints)});
    }


    const deleteUser = (id) => {
          deleteFootprint(id).then(()=>{
          let temp = footprints.map(f=>f);
          const toDel = footprints.map(f =>f._id).indexOf(id);
          temp.splice(toDel, 1);
          setFootprints(temp);
        })
    }


    return (
        
        <main>
            <Router>
                <NavBar />
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/impact" element={<Impact footprints={footprints} deleteUser={deleteUser} addFootprint={addFootprint}/>} />
                        <Route exact path="/usercomparisons" element={<UserComparisons footprints={footprints} deleteUser={deleteUser} />} />
                        <Route exact path="/hints" element={<HintsPage />} />
                        <Route path="*" element={<ErrorPage />} />
                        <Route exact path='/updatefootprint/:id' element={<UpdateFootprint footprints={footprints} updateFootprint={updateFootprint} deleteUser={deleteUser}/>} />
                    </Routes>


                
            </Router>
        </main>
    )
}

export default MainContainer