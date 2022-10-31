import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    title: {
      text: 'My stock chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }
  
const FootprintGraph = () =>

<HighchartsReact highcharts={Highcharts} options={options} />


export default FootprintGraph
// constructorType={'stockChart'}