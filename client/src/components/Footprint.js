import React from 'react'

const Footprint = ({footprint}) => {

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
    }

    switch(footprint.house_size){
        case '1' : household_score = 14
        break;
        case '2' : household_score = 12
        break;
        case '3' : household_score = 10
        break;
        case '4' : household_score = 8
        break; 
    }

    const final_score = household_score;
    return final_score;
}

    const footprint_score = CalculateFinalScore(footprint)

    return (
        <>
        <div className="user-card">
        <div>User: {footprint.username}</div>
        <div>Household Members: {footprint.household}</div>
        <div>House Size: {footprint.house_size}</div>
        <div>Food Consumption: {footprint.food}</div>
        <div>Water Usage: {footprint.water}</div>
        <div>Yearly Purchases: {footprint.purchases}</div>
        <div>Waste: {footprint.waste}</div>
        <div>Do You Recycle?: {footprint.recycle ? "Yes" : "No"}</div>
        <div>Transport: {footprint.transport}</div>
        <div>Carbon Footprint Score: {footprint_score}</div>
        <br></br>
        </div>
        </>
    )
}

export default Footprint