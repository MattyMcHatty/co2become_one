import React from 'react'
import Footprint from './Footprint'

const UserComparisons = ({footprints}) => {

    const footprintsList = footprints.map((footprint) => {
        return <Footprint footprint={footprint} key={footprint._id} />
    })

    return (
        <div>{footprintsList}</div>
    )
}

export default UserComparisons