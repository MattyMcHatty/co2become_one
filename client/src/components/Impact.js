import React from 'react'
import FootprintForm from './FootprintForm'
import FootprintGraph from './FootprintGraph'

const Impact = ({footprints, addFootprint}) => {


    return (
        <>
        <div><FootprintForm addFootprint={addFootprint}/></div>
        {/* <div><FootprintGraph CalculateFinalScore={CalculateFinalScore} footprint={footprint}/></div> */}
        </>
    )
}

export default Impact