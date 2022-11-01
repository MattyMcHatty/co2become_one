import React, { useState, useEffect } from 'react'
import { putFootprint } from './FootprintsService'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


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


const UpdateFootprint = ({footprints, updateFootprint}) => {

    const refresh = () => {
        window.location.reload(false)
      }

    const navigate = useNavigate()
    const [updateData, setUpdateData] = useState([])
    // const [rerender, setRerender] = useState(false)

    const {id} =  useParams()

    const footprint = footprints.filter(footprint => footprint._id === id)
    console.log(updateData);

    useEffect(() => {
        setUpdateData({
            username: footprint[0].username,
            household: footprint[0].household,
            house_size: footprint[0].house_size,
            food: footprint[0].food,
            water: footprint[0].water,
            purchases: footprint[0].purchases,
            waste: footprint[0].waste,
            transport: footprint[0].transport,
            recycle: footprint[0].recycle,
              })
     },[])

    const onChange = (e) => {
        // return
        const newFormData = Object.assign({}, updateData);
        newFormData[e.target.name] = e.target.value;
        setUpdateData(newFormData);
    }
    const onSubmit = (e) => {
        e.preventDefault()
        updateData._id = id;
        putFootprint(updateData)
        .then(updateFootprint())
        // setRerender(!rerender)
        navigate('/usercomparisons')
        refresh()
    }

    return(
<form onSubmit={onSubmit} id="footprint-form">
            <Title>Update User</Title>
            <Question className="form-wrap">
                <label htmlFor="username">Username: </label>
                <Input onChange={onChange} type="text" id="username" name="username"  value={updateData.username}  required />
            </Question>
            <Question className="form-wrap">
                <label htmlFor="household">How many people live in your house?: </label>
                <Select onChange={onChange} id="household" name="household" value={updateData.household} required>
                    <option value="" default >Please Select</option>
                    <option value="Live Alone">I Live alone</option>
                    <option value="2 People">2</option>
                    <option value="3 People">3</option>
                    <option value="4 People">4</option>
                    <option value="5 People">5 </option>
                    <option value="6 People">6 </option>
                    <option value="7+ People">7 +</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="house_size">How big is your house?: </label>
                <Select onChange={onChange} id="house_size" name="house_size" value={updateData.house_size} required>
                    <option value="" default >Please Select</option>
                    <option value="Flat">Flat</option>
                    <option value="Small">Small House</option>
                    <option value="Medium">Medium House</option>
                    <option value="Large">Large House</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="food">How would you describe your diet?: </label>
                <Select onChange={onChange} id="food" name="food" value={updateData.food} required>
                    <option value="" default >Please Select</option>
                    <option value="Meat Daily">I eat meat every day</option>
                    <option value="Meat Sometimes">I eat meat a few times a week</option>
                    <option value="Vegetarian">I am vegetarian</option>
                    <option value="Vegan">I am vegan</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="water">How many times a week do you use your washing machine?: </label>
                <Select onChange={onChange} id="water" name="water" value={updateData.water} required>
                    <option value="" default >Please Select</option>
                    <option value="1-3">1 to 3 times per week</option>
                    <option value="4-9">4 to 9 times per week</option>
                    <option value="Over 9">9 + times per week</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="purchases">How often do you buy new furniture, electronics or other household gadgets?: </label>
                <Select onChange={onChange} id="purchases" name="purchases" value={updateData.purchases} required>
                    <option value="" default >Please Select</option>
                    <option value="Almost Never">Almost never or only second hand</option>
                    <option value="Less than 3">Less than 3 times</option>
                    <option value="Between 3 and 5">Between 3 and 5 times</option>
                    <option value="Between 5 and 7">Between 5 and 7 times</option>
                    <option value="7+ times">7+ times</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="waste">How many bags of rubbish do you fill per week?: </label>
                <Select onChange={onChange} id="waste" name="waste" value={updateData.waste} required>
                    <option value="" default >Please Select</option>
                    <option value="Half or less">Half or less</option>
                    <option value="1 Bag">1</option>
                    <option value="2 Bags">2</option>
                    <option value="3 Bags">3</option>
                    <option value="4+ Bags">4</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="transport">What is your primary mode of transport?: </label>
                <Select onChange={onChange} id="transport" name="transport" value={updateData.transport} required>
                    <option value="" default >Please Select</option>
                    <option value="Bike or Walk">Bike or Walk</option>
                    <option value="Train">Train</option>
                    <option value="Bus">Bus</option>
                    <option value="Car">Car</option>
                </Select>
            </Question>
            <Question className="form-wrap">
                <label htmlFor="recycle">Do you recycle?: </label>
                <Select onChange={onChange} id="recycle" name="recycle" value={updateData.recycle} required>
                    <option value="Yes" >Yes</option>
                    <option value="No" >No</option>
                </Select>
            </Question>

            <CalculateButton type="submit" value="Update User Footprint" id="save" />

        </form>
    )
}

export default UpdateFootprint