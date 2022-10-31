import React from 'react'
import { render } from 'react-dom';
import Footprint from './Footprint'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UserComparisons = ({footprints}) => {

    const footprintsList = footprints.map((footprint) => {
        return <Footprint footprint={footprint} key={footprint._id} />
    })
    
    const options = {
        title: {
          text: 'My stock chart'
        },
        series: [{
          data: [1, 2, 3]
        }]
      }
      

    return (
        <>
        <div>{footprintsList}</div>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )


    
}

export default UserComparisons