import React from 'react'
import FootprintGraph from './FootprintGraph';
import { deleteFootprint, putFootprint} from './FootprintsService';
import UpdateFootprint from './UpdateFootprint';
import { Link } from 'react-router-dom';



const Footprint = ({footprint, deleteUser}) => {

    const CalculateFinalScore =(footprint) =>{
    let household_score = 0;
    let house_size_score = 0;
    let food_score = 0;
    let water_score = 0;
    let purchases_score = 0;
    let waste_score = 0;
    let recycle_score = 0;
    let transport_score = 0;

    switch(footprint.household){
        case '1' : household_score = 14
        break;
        case '2' : household_score = 12
        break;
        case '3' : household_score = 10
        break;
        case '4' : household_score = 8
        break; 
        case '5' : household_score = 6
        break;
        case '6' : household_score = 4
        break;
        case '7' : household_score = 2
        break;
        default:
    }

    switch(footprint.house_size){
        case 'Flat' : house_size_score = 2
        break;
        case 'Small' : house_size_score = 4
        break;
        case 'Medium' : house_size_score = 7
        break;
        case 'Large' : house_size_score = 10
        break; 
        default:
    }
    switch(footprint.food){
        case 'Meat Daily' : food_score = 10
        break;
        case 'Meat Sometimes' : food_score = 8
        break;
        case 'Vegetarian' : food_score = 4
        break;
        case 'Vegan' : food_score = 2
        break; 
        default:
    }
    switch(footprint.water){
        case '1' : water_score = 1
        break;
        case '2' : water_score = 2
        break;
        case '3' : water_score = 3
        break;
        default:
    }
    switch(footprint.purchases){
        case '1' : purchases_score = 2
        break;
        case '2' : purchases_score = 4
        break;
        case '3' : purchases_score = 6
        break;
        case '4' : purchases_score = 8
        break; 
        case '5' : purchases_score = 10
        break;
        default:
    }
    switch(footprint.waste){
        case '1' : waste_score = 5
        break;
        case '2' : waste_score = 20
        break;
        case '3' : waste_score = 30
        break;
        case '4' : waste_score = 40
        break; 
        case '5' : waste_score = 50
        break;
        default:
    }
    switch(footprint.transport){
        case 'Bike or Walk' : transport_score = 0
        break;
        case 'Train' : transport_score = 4
        break;
        case 'Bus' : transport_score = 6
        break;
        case 'Car' : transport_score = 10
        break; 
        default:
    }switch(footprint.recycle){
        case "false" : recycle_score = 24
        break;
        case "true" : recycle_score = 0
        break;
        default:
    }

    const final_score = household_score + house_size_score + food_score + water_score + purchases_score + waste_score + purchases_score + waste_score + transport_score + recycle_score;
    const individual_scores = [household_score, house_size_score, food_score, water_score, purchases_score, waste_score, purchases_score, waste_score, transport_score, recycle_score]
    return [final_score, individual_scores]

}

    const calculations = CalculateFinalScore(footprint)
    const footprint_score = calculations[0]
    const individual_scores = calculations[1]

    // const handleClick = () => {
    //     console.log("click");
    //     return <Link to={`/updatefootprint/${footprint._id}`}/>
    // }
    return (
        <>
        <div className='container'>
        <div className="user-card">
        {/* <div>User: {footprint.username}</div>
        <div>Household Members: {footprint.household}</div>
        <div>House Size: {footprint.house_size}</div>
        <div>Food Consumption: {footprint.food}</div>
        <div>Water Usage: {footprint.water}</div>
        <div>Yearly Purchases: {footprint.purchases}</div>
        <div>Waste: {footprint.waste}</div>
        <div>Do You Recycle?: {footprint.recycle ? "Yes" : "No"}</div>
        <div>Transport: {footprint.transport}</div>
        <div>Carbon Footprint Score: {footprint_score}</div> */}
        <br></br>
        <FootprintGraph CalculateFinalScore={CalculateFinalScore} footprint={footprint} />
        <Link to={`/updatefootprint/${footprint._id}`}> <button>Update User <i class="fa fa-edit"></i></button> </Link>
        {/* <button>Update User</button> */}
        <button  onClick={()=>deleteUser(footprint._id)}>Delete User 🗑</button>
        </div>
        </div>
        </>
    )
}


export default Footprint
