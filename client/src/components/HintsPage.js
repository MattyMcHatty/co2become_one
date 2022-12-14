import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

const HintsPage = () => {
    return (
        <div style={{ display: 'inline-block', width: 1000, padding: 50}}>
        <h4>CO2 Reducing Hints and Tips</h4>
        <Carousel>
        <Carousel.Item interval={3000} >
        <img
            className="d-block w-100"
            src={"https://wallpapercrafter.com/th800/232791-dark-green-leaves-on-plants-outsidelost-in-the-lea.jpg"}
            alt="One"
            />
        <Carousel.Caption>
            <h3>Air Travel</h3>
            <h4>Pack Light - The more you pack, the heavier the aircraft — and the heavier the aircraft, the more fuel required.</h4>
                <br></br>
            <h4>Opt for economy - Business- and first-class seating take up more space and weight, so more fuel is required per passenger (first-class tickets account for, on average, four times the emissions of an economy seat)</h4>
                <br></br> 
            <h4> Carbon offset - Plant some trees to offset your journey  </h4>
                <br></br>
            <h4>While you’re comparing airline prices, compare the company’s eco-credentials too. What you want is transparency about their emissions and initiatives designed to reduce their environmental impact.</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
            <img
            className="d-block w-100"
            src={"https://wallpapercrafter.com/th800/232791-dark-green-leaves-on-plants-outsidelost-in-the-lea.jpg"}
            alt="Two"
            />
            <Carousel.Caption>
            <h3>Food</h3>
            <br></br>
            <h5>What do you actually need?- check fridge/freezer cupboards before you shop. Know what you already have.</h5>
            <br></br>
            <h5>Find out the best places to store your food - eg most fruit and veg should be kept in the fridge.</h5>
            <br></br>
            <h5>The freezer is your friend - most food that is binned is fresh food. Freeze food when you get home from the shop that you know you won’t need until later that week.</h5>
            <br></br>
            <h5>A good time to check the fridge temperature - take a quick look at your fridge temperature and check its below 5oC this keeps food fresher for longer. </h5>
            <br></br>
            <h5><p>Think about your week ahead. Who’s in, whose out? Sense check your meal plan and adjust if plans have changed. </p></h5>
            </Carousel.Caption>
        </Carousel.Item>
    <Carousel.Item interval={3000}>
        <img
        className="d-block w-100"
        src={"https://wallpapercrafter.com/th800/232791-dark-green-leaves-on-plants-outsidelost-in-the-lea.jpg"}
        alt="Three"
        />
        <Carousel.Caption>
        <h3>Car Travel </h3>
        <br></br>
        <h4> Properly inflated tires improves your milage by up to 3%.
            It also helps to use the correct grade of motor oil, and to keep 
            your engine tuned, because some maintenance fixes, like fixing faulty
            oxygen sensors, can increase fuel efficiency by up to 40%.</h4>
                <br></br>
        <h4> Combine errands to make fewer trips </h4>
                    <br></br>
        <h4> Remove excess weight from your car  </h4>
                    <br></br>
        <h4> Use cruise control </h4>
                <br></br>
        <h4>When possible, walk or ride your bike in order to avoid carbon emissions completely.</h4>
        </Carousel.Caption>
    </Carousel.Item>
        </Carousel>
    </div>
        )
}

export default HintsPage;