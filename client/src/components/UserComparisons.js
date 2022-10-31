import React from 'react'
import { render } from 'react-dom';
import Footprint from './Footprint'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserComparisons = ({footprints, deleteUser}) => {

    const footprintsList = footprints.map((footprint) => {
        return <Footprint footprint={footprint} key={footprint._id} deleteUser={deleteUser}/>
    })
    
      

    return (
        <>
        <div>{footprintsList}</div>
        {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
        </>
    )


    
}

export default UserComparisons