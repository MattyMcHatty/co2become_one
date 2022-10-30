import React from 'react'

const Footprint = ({footprint}) => {


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
        <br></br>
        </div>
        </>
    )
}

export default Footprint