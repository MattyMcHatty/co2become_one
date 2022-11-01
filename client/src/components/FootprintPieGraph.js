import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const FootprintPieGraph = ({footprint, CalculateFinalScore}) => {

    const calculations = CalculateFinalScore(footprint)
    const individual_scores = calculations[1]





        const options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'How much each category contributes to your carbon footprint'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: "",
                colorByPoint: true,
                data: [{
                    name: 'HouseHold Size',
                    y: individual_scores[0],
                }, {
                    name: "House Size",
                    y: individual_scores[1],
                }, {
                    name: "Food",
                    y: individual_scores[2],
                }, {
                    name: "Water(Washing Machine)",
                    y: individual_scores[3],
                },  {
                    name: "Purchases",
                    y: individual_scores[4],
                }, {
                    name: "Waste",
                    y: individual_scores[5],
                }, {
                    name: "Recycle",
                    y: individual_scores[6],
                }, {
                    name: "Transport",
                    y: individual_scores[7],
                }]
            }]
        };
        


  return (
    <>
    <div className='piechart'><HighchartsReact highcharts={Highcharts} options={options} /></div>
    </>
  )

}


export default FootprintPieGraph