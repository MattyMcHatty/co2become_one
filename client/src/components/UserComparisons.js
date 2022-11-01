import React , { useEffect } from 'react'
import { render ,useHistory} from 'react-dom';
import Footprint from './Footprint'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const UserComparisons = ({footprints, deleteUser}) => {

//    const history = useHistory()
    // location.reload()

    const footprintsList = footprints.map((footprint) => {
        return <Footprint footprint={footprint} key={footprint._id} deleteUser={deleteUser}/>
        
    })
    // history.go(0)
      

    return (
        <>
        <div className='list'>{footprintsList}</div>
        {/* <HighchartsReact highcharts={Highcharts} options={options} /> */}
        </>
    )


    
}

export default UserComparisons