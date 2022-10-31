import React from 'react'
import { render } from 'react-dom';
import Footprint from './Footprint'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserComparisons = ({footprints}) => {

    const footprintsList = footprints.map((footprint) => {
        return <Footprint footprint={footprint} key={footprint._id} />
    })


    // const options = {
    //     chart: {
    //       type: 'spline'
    //     },
    //     title: {
    //       text: 'My chart'
    //     },
    //     series: [
    //       {
    //         data: [1, 2, 1, 4, 3, 6]
    //       }
    //     ]
    //   };
    //   <div>
    //   <HighchartsReact highcharts={Highcharts} options={options} />
    // </div>




    return (
        <div>{footprintsList}</div>
    )


    
}

export default UserComparisons