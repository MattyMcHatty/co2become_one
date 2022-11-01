import React from 'react'
import FootprintForm from './FootprintForm'


const Impact = ({footprints, addFootprint, deleteUser}) => {


    return (
        <>
        <div><FootprintForm addFootprint={addFootprint} footprints={footprints} deleteUser={deleteUser}/></div>

        </>
    )
}

export default Impact