import React, { useState, useEffect } from 'react'
import { putFootprint } from './FootprintsService'
import { Link, useParams, useNavigate } from 'react-router-dom'



const UpdateFootprint = ({footprints, updateFootprint}) => {

    const refresh = () => {
        window.location.reload(false)
      }

    const navigate = useNavigate()
    const [updateData, setUpdateData] = useState([])
    const [rerender, setRerender] = useState(false)

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
        setRerender(!rerender)
        navigate('/usercomparisons')
        refresh()
    }

    return(
<form onSubmit={onSubmit} id="footprint-form">
            <h2>Update User</h2>
            <div className="form-wrap">
                <label htmlFor="username">Username: </label>
                <input onChange={onChange} type="text" id="username" name="username"  value={updateData.username}  required />
            </div>
            <div className="form-wrap">
                <label htmlFor="household">How many people live in your house?: </label>
                <select onChange={onChange} id="household" name="household" value={updateData.household} required>
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
                <select onChange={onChange} id="house_size" name="house_size" value={updateData.house_size} required>
                    <option value="" default >Please Select</option>
                    <option value="Flat">Flat</option>
                    <option value="Small">Small House</option>
                    <option value="Medium">Medium House</option>
                    <option value="Large">Large House</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="food">How would you describe your diet?: </label>
                <select onChange={onChange} id="food" name="food" value={updateData.food} required>
                    <option value="" default >Please Select</option>
                    <option value="Meat Daily">I eat meat every day</option>
                    <option value="Meat Sometimes">I eat meat a few times a week</option>
                    <option value="Vegetarian">I am vegetarian</option>
                    <option value="Vegan">I am vegan</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="water">How often do you use your washing machine?: </label>
                <select onChange={onChange} id="water" name="water" value={updateData.water} required>
                    <option value="" default >Please Select</option>
                    <option value="1">1 to 3 times per week</option>
                    <option value="2">4 to 9 times per week</option>
                    <option value="3">9 + times per week</option>
                </select>
            </div>
            <div className="form-wrap">
                <label htmlFor="purchases">How often do you buy new furniture, electronics or other household gadgets?: </label>
                <select onChange={onChange} id="purchases" name="purchases" value={updateData.purchases} required>
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
                <select onChange={onChange} id="waste" name="waste" value={updateData.waste} required>
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
                <select onChange={onChange} id="transport" name="transport" value={updateData.transport} required>
                    <option value="" default >Please Select</option>
                    <option value="Bike or Walk">Bike or Walk</option>
                    <option value="Train">Train</option>
                    <option value="Bus">Bus</option>
                    <option value="Car">Car</option>
                </select>
            </div>
            {/* <div className="form-wrap">
                <label htmFor="recycle">Do you recycle?: </label>
                <input type="checkbox" id="recycle" name="recycle" onClick={updateData.recycle = true}></input>
            </div> */}
            <div className="form-wrap">
                <label htmlFor="recycle">Do you recycle?: </label>
                <select onChange={onChange} id="recycle" name="recycle" value={updateData.recycle} required>
                    <option value="true" >Yes</option>
                    <option value="false" >No</option>
                </select>
            </div>
            <div>
            <input type="submit" value="Update User Footprint" id="save" />
            </div>
        </form>
    )
}

export default UpdateFootprint