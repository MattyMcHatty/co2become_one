import React, { useState, useEffect } from 'react'
import { postFootprint } from './FootprintsService'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Select = styled.select`
    position: relative;
    font-family: Arial;
    background-color: #009933;
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
    width: 300px;

    &:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
    }
    &:hover{
    background-color:  #00e64d;
    }
`

const Input = styled.input`
    position: relative;
    font-family: Arial;
    background-color: #00e64d;
    color: #ffffff;
    padding: 8px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
    width: 282px;
`

const Question = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 1px;
`

const CalculateButton = styled.input`
    box-shadow:inset 0px 1px 0px 0px #9acc85;
	background:linear-gradient(to bottom, #74ad5a 5%, #68a54b 100%);
	background-color:#74ad5a;
	border:1px solid #3b6e22;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:bold;
	padding:6px 12px;
	text-decoration:none;
    width: 200px;
    height: 50px;

&:hover {
	background:linear-gradient(to bottom, #68a54b 5%, #74ad5a 100%);
	background-color:#68a54b;
}
&:active {
	position:relative;
	top:1px;
}
`

const Title = styled.h2`
    text-decoration: underline;   
`


    const FootprintForm = ({addFootprint}) => {
      
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        household: "",                              // USE SEPARATE STATES
        house_size: "",
        food: "",
        water: "",
        purchases: "",
        waste: "",
        recycle: "",
        transport: "",
    })


    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        // if (id){
        //     putFootprint(formData)
        //     // .then((data)=>{putFootprint(data)})
        //     console.log(formData)

        // } else {
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
        // }
        navigate('/usercomparisons')
    }
    return (
        <form onSubmit={onSubmit} id="footprint-form">
            <Title>Tell us about you</Title>
            <Question className="form-wrap">
                <label htmlFor="username">Username: </label>
                <Input onChange={onChange} type="text" id="username" name="username" value={formData.username} placeholder="Enter Username Here" required />
            </Question>
            <Question className="form-wrap">
                <label htmlFor="household">How many people live in your house?: </label>
                <Select onChange={onChange} id="household" name="household" value={formData.household} required>
                    <option value="" default >Please Select</option>
                    <option value="1">I Live alone</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 </option>
                    <option value="6">6 </option>
                    <option value="7">7 +</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="house_size">How big is your house?: </label>
                <Select onChange={onChange} id="house_size" name="house_size" value={formData.house_size} required>
                    <option value="" default >Please Select</option>
                    <option value="Flat">Flat</option>
                    <option value="Small">Small House</option>
                    <option value="Medium">Medium House</option>
                    <option value="Large">Large House</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="food">How would you describe your diet?: </label>
                <Select onChange={onChange} id="food" name="food" value={formData.food} required>
                    <option value="" default >Please Select</option>
                    <option value="Meat Daily">I eat meat every day</option>
                    <option value="Meat Sometimes">I eat meat a few times a week</option>
                    <option value="Vegetarian">I am vegetarian</option>
                    <option value="Vegan">I am vegan</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="water">How often do you use your washing machine?: </label>
                <Select onChange={onChange} id="water" name="water" value={formData.water} required>
                    <option value="" default >Please Select</option>
                    <option value="1">1 to 3 times per week</option>
                    <option value="2">4 to 9 times per week</option>
                    <option value="3">9 + times per week</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="purchases">How often do you buy new furniture, electronics or other household gadgets?: </label>
                <Select onChange={onChange} id="purchases" name="purchases" value={formData.purchases} required>
                    <option value="" default >Please Select</option>
                    <option value="1">Almost never or only second hand</option>
                    <option value="2">Less than 3 times</option>
                    <option value="3">Between 3 and 5 times</option>
                    <option value="4">Between 5 and 7 times</option>
                    <option value="5">7+ times</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="waste">How many bags of rubbish do you fill per week?: </label>
                <Select onChange={onChange} id="waste" name="waste" value={formData.waste} required>
                    <option value="" default >Please Select</option>
                    <option value="1">Half or less</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="4">3</option>
                    <option value="5">4</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="transport">What is your primary mode of transport?: </label>
                <Select onChange={onChange} id="transport" name="transport" value={formData.transport} required>
                    <option value="" default >Please Select</option>
                    <option value="Bike or Walk<">Bike or Walk</option>
                    <option value="Train">Train</option>
                    <option value="Bus">Bus</option>
                    <option value="Car">Car</option>
                </Select>
            </Question>
            {/* <Question className="form-wrap">
                <label htmFor="recycle">Do you recycle?: </label>
                <input type="checkbox" id="recycle" name="recycle" onClick={formData.recycle = true}></input>
            </Question> */}
            <Question className="form-wrap">
                <label htmlFor="recycle">Do you recycle?: </label>
                <Select onChange={onChange} id="recycle" name="recycle" value={formData.recycle} required>
                    <option value="true" >Yes</option>
                    <option value="false" >No</option>
                </Select>
            </Question>
            <CalculateButton type="submit" value="Calculate Footprint" id="save" />
        </form>
    )
}

export default FootprintForm