import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const greenFoot = require('../images/green_footprint.png')
const redFoot = require('../images/red_footprint.png')



const FootprintGraph = ({footprint, CalculateFinalScore}) => {

    const calculations = CalculateFinalScore(footprint)
    const footprint_score = calculations[0]
    const individual_scores = calculations[1]

    const footprintImage = () => {
      if(footprint_score > 59){
        return redFoot
      }else{
        return greenFoot
      }
    }
    const footImage = footprintImage()

const baroptions = {

    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: null
    },
    accessibility: {
            enabled: false
        
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total Co2 Score'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.state}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:  '<span style="color:{point.color}">{point.name}</span>: <b>{point.info}</b><br/>'
    },

    series: [
        {
            name: "",
            colorByPoint: true,
            data: [
                {
                    name: "HouseHold Size",
                    y: individual_scores[0],
                    info: "Sharing your home with more people ensures your carbon footprint remains low as you each share utilities",
                    state: footprint.household,
                    drilldown: null
                },
                {
                    name: "House Size",
                    y: individual_scores[1],
                    info: "Smaller homes with less empty space are easier to heat and are therefore better for the environment.",
                    state: footprint.house_size,
                    drilldown: null
                },
                {
                    name: "Food",
                    y: individual_scores[2],
                    info: "More energy is required to raise cattle and eat meat than to simply eat vegetables right at the source",
                    state: footprint.food,
                    drilldown: "Firefox"
                },
                {
                    name: "Water(Washing Machine)",
                    y: individual_scores[3],
                    info: "Using less water means fewer droughts and lusher, greener countryside",
                    state: footprint.water,
                    drilldown: ""

                },
                {
                    name: "Purchases",
                    y: individual_scores[4],
                    info: "Disposing of older gadgets and white goods is difficult and bad for the environment",
                    state: footprint.purchases,
                    drilldown: "Opera"
                },
                {
                    name: "Waste",
                    y: individual_scores[5],
                    info: "Choosing to recycle rather than fill the waste bin means fewer non-degradable materials end up in the landfill",
                    state: footprint.waste,
                    drilldown: "Internet Explorer"
                },
                {
                    name: "Recycle",
                    y: individual_scores[6],
                    info: "Recycled materials can be use for a multitude of things, including building materials",
                    state: footprint.recycle,
                    drilldown: null
                    
                },
                {
                    name: "Transport",
                    y: individual_scores[7],
                    info: "Cycling to work means fewer harmful exhaust fumes filling our precious air and it’s good exercise too",
                    state: footprint.transport,
                    drilldown: null
                    
                }

            ]
        }
    ],
    drilldown: {
        breadcrumbs: {
            position: {
                align: 'right'
            }
        },
        series: [
            {
                name: "Chrome",
                id: "Chrome",
                data: [
                    [
                        "v65.0",
                        0.1
                    ],
                    [
                        "v64.0",
                        1.3
                    ],
                    [
                        "v63.0",
                        53.02
                    ],
                    [
                        "v62.0",
                        1.4
                    ],
                    [
                        "v61.0",
                        0.88
                    ],
                    [
                        "v60.0",
                        0.56
                    ],
                    [
                        "v59.0",
                        0.45
                    ],
                    [
                        "v58.0",
                        0.49
                    ],
                    [
                        "v57.0",
                        0.32
                    ],
                    [
                        "v56.0",
                        0.29
                    ],
                    [
                        "v55.0",
                        0.79
                    ],
                    [
                        "v54.0",
                        0.18
                    ],
                    [
                        "v51.0",
                        0.13
                    ],
                    [
                        "v49.0",
                        2.16
                    ],
                    [
                        "v48.0",
                        0.13
                    ],
                    [
                        "v47.0",
                        0.11
                    ],
                    [
                        "v43.0",
                        0.17
                    ],
                    [
                        "v29.0",
                        0.26
                    ]
                ]
            },
            {
                name: "Firefox",
                id: "Firefox",
                data: [
                    [
                        "v58.0",
                        1.02
                    ],
                    [
                        "v57.0",
                        7.36
                    ],
                    [
                        "v56.0",
                        0.35
                    ],
                    [
                        "v55.0",
                        0.11
                    ],
                    [
                        "v54.0",
                        0.1
                    ],
                    [
                        "v52.0",
                        0.95
                    ],
                    [
                        "v51.0",
                        0.15
                    ],
                    [
                        "v50.0",
                        0.1
                    ],
                    [
                        "v48.0",
                        0.31
                    ],
                    [
                        "v47.0",
                        0.12
                    ]
                ]
            },
            {
                name: "Internet Explorer",
                id: "Internet Explorer",
                data: [
                    [
                        "v11.0",
                        6.2
                    ],
                    [
                        "v10.0",
                        0.29
                    ],
                    [
                        "v9.0",
                        0.27
                    ],
                    [
                        "v8.0",
                        0.47
                    ]
                ]
            },
            {
                name: "Safari",
                id: "Safari",
                data: [
                    [
                        "v11.0",
                        3.39
                    ],
                    [
                        "v10.1",
                        0.96
                    ],
                    [
                        "v10.0",
                        0.36
                    ],
                    [
                        "v9.1",
                        0.54
                    ],
                    [
                        "v9.0",
                        0.13
                    ],
                    [
                        "v5.1",
                        0.2
                    ]
                ]
            },
            {
                name: "Edge",
                id: "Edge",
                data: [
                    [
                        "v16",
                        2.6
                    ],
                    [
                        "v15",
                        0.92
                    ],
                    [
                        "v14",
                        0.4
                    ],
                    [
                        "v13",
                        0.1
                    ]
                ]
            },
            {
                name: "Opera",
                id: "Opera",
                data: [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
  }

   
return(
    <>
        <div>{footprint.username}   |   Overall Co2 Score: {footprint_score} Points <img height="50px" alt="" src={footImage}/> </div>
        <div className='barchart'><HighchartsReact highcharts={Highcharts} options={baroptions} /></div>
    </>
    )
}
export default FootprintGraph

