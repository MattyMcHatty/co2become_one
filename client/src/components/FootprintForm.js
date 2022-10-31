import React, { useState, useEffect } from 'react'
import { postFootprint } from './FootprintsService'


const FootprintForm = ({addFootprint}) => {

    const [formData, setFormData] = useState({
        username: "",
        household: "",
        house_size: "",
        food: "",
        water: "",
        purchases: "",
        waste: "",
        recycle: "",
        transport: ""
    })

    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postFootprint(formData)
        .then((data)=>{addFootprint(data);})
        // Reset the form input values
        setFormData({
        username: "",
        household: "",
        house_size: "",
        food: "",
        water: "",
        purchases: "",
        waste: "",
        recycle: "",
        transport: ""
        });
    }
    return (
        <form onSubmit={onSubmit} id="footprint-form">
            <h2>Tell us about you</h2>
            <div className="form-wrap">
                <label htmlFor="username">Username: </label>
                <input onChange={onChange} type="text" id="username" name="username" value={formData.username} required />
            </div>
            <div className="form-wrap">
                <label htmlFor="household">How many people live in your house?: </label>
                <select onChange={onChange} id="household" name="household" value={formData.household} required>
                    <option value="" default >Please Select</option>
                    <option value="1">I Live alone</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 </option>
                    <option value="6">6 </option>
                    <option value="7">7 +</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="house_size">How big is your house?: </label>
                <select onChange={onChange} id="house_size" name="house_size" value={formData.house_size} required>
                    <option value="" default >Please Select</option>
                    <option value="Flat">Flat</option>
                    <option value="Small">Small House</option>
                    <option value="Medium">Medium House</option>
                    <option value="Large">Large House</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="food">How would you describe your diet?: </label>
                <select onChange={onChange} id="food" name="food" value={formData.food} required>
                    <option value="" default >Please Select</option>
                    <option value="Meat Daily">I eat meat every day</option>
                    <option value="Meat Sometimes">I eat meat a few times a week</option>
                    <option value="Vegetarian">I am vegetarian</option>
                    <option value="Vegan">I am vegan</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="water">How often do you use your washing machine?: </label>
                <select onChange={onChange} id="water" name="water" value={formData.water} required>
                    <option value="" default >Please Select</option>
                    <option value="1">1 to 3 times per week</option>
                    <option value="2">4 to 9 times per week</option>
                    <option value="3">9 + times per week</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="purchases">How often do you buy new furniture, electronics or other household gadgets?: </label>
                <select onChange={onChange} id="purchases" name="purchases" value={formData.purchases} required>
                    <option value="" default >Please Select</option>
                    <option value="1">Almost never or only second hand</option>
                    <option value="2">Less than 3 times</option>
                    <option value="3">Between 3 and 5 times</option>
                    <option value="4">Between 5 and 7 times</option>
                    <option value="5">7+ times</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="waste">How many bags of rubbish do you fill per week?: </label>
                <select onChange={onChange} id="waste" name="waste" value={formData.waste} required>
                    <option value="" default >Please Select</option>
                    <option value="1">Half or less</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="transport">What is your primary mode of transport?: </label>
                <select onChange={onChange} id="transport" name="transport" value={formData.transport} required>
                    <option value="" default >Please Select</option>
                    <option value="1">Bike or Walk</option>
                    <option value="2">Train</option>
                    <option value="3">Bus</option>
                    <option value="4">Car</option>
                </select>
            </div>
            {/* <div className="form-wrap">
                <label htmFor="recycle">Do you recycle?: </label>
                <input type="checkbox" id="recycle" name="recycle" onClick={formData.recycle = true}></input>
            </div> */}
            <div className="form-wrap">
                <label htmlFor="recycle">Do you recycle?: </label>
                <select onChange={onChange} id="recycle" name="recycle" value={formData.recycle} required>
                    <option value="true" >Yes</option>
                    <option value="false" >No</option>
                </select>
            </div>
            <input type="submit" value="Calculate Footprint" id="save" />
        </form>
    )
}

export default FootprintForm