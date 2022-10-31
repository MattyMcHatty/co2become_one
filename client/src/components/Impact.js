import React from 'react'
import FootprintForm from './FootprintForm'
import FootprintGraph from './FootprintGraph'

const Impact = ({footprints, addFootprint, deleteUser}) => {


    return (
        <>
        <div><FootprintForm addFootprint={addFootprint} footprints={footprints} deleteUser={deleteUser}/></div>
        {/* <div><FootprintGraph CalculateFinalScore={CalculateFinalScore} footprint={footprint}/></div> */}
        </>
    )
}

export default Impact