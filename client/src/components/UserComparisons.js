import React from 'react'
import Footprint from './Footprint';


const UserComparisons = ({footprints, deleteUser}) => {

    const footprintsList = footprints.map((footprint) => {
        return <Footprint footprint={footprint} key={footprint._id} deleteUser={deleteUser}/>
        
    })
    
    return (
        <>
        <div className='list'>{footprintsList}</div>
        </>
    )
    
}

export default UserComparisons