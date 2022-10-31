import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';




const HintsPage = () => {
    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h4>CO2 Reducing Hints and Tips</h4>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Air Travel Tips</h3>
              <p>Pack Light - The more you pack, the heavier the aircraft — and the heavier the aircraft, the more fuel required. Consider this: just a few years ago, researchers estimated that each passenger carrying a phone on Southwest Airlines cost the company $1.2m (£927,000) annually in weight-related fuel expenses.
//          Opt for economy  - Business- and first-class seating take up more space and weight, so more fuel is required per passenger (first-class tickets account for, on average, four times the emissions of an economy seat)</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
        
  






         //         <>
//     <script src="/path/to/flickity.pkgd.min.js"></script>


//     <div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'></div>
//     <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'>

//   <div class="gallery-cell"> Air Travel Tips
//          Pack Light - The more you pack, the heavier the aircraft — and the heavier the aircraft, the more fuel required. Consider this: just a few years ago, researchers estimated that each passenger carrying a phone on Southwest Airlines cost the company $1.2m (£927,000) annually in weight-related fuel expenses.
//          Opt for economy  - Business- and first-class seating take up more space and weight, so more fuel is required per passenger (first-class tickets account for, on average, four times the emissions of an economy seat)
        
//         Find airlines doing more - While you’re comparing airline prices, compare the company’s eco-credentials too. What you want is transparency about their emissions and initiatives designed to reduce their environmental impact.
//         </div>

// </div>
//        <div className='Body'>
//         <div>HintsPage</div>
//      <div className='airTips'>
//         <div className='carTips'>
//         <h3> Car Travel Tips </h3>
//         <p> Tire inflation and other tuning :
            
//             Properly inflated tires improves your milage by up to 3%.
//             It also helps to use the correct grade of motor oil, and to keep 
//             your engine tuned, because some maintenance fixes, like fixing faulty
//             oxygen sensors, can increase fuel efficiency by up to 40%. 
//         </p>
//         <p> Combine errands to make fewer trips </p>
//         <p> Remove excess weight from your car  </p>
//         <p> Use cruise control </p>

//         <p> When possible, walk or ride your bike in order to avoid carbon emissions completely.
//             Carpooling and public transportation drastically reduces CO2 emissions by spreading them out over 
//             many riders.
//         </p>
//         </div>


//         <div className='foodTips'>
//         <h3>Weekly Food Habits Tips</h3>
//         <h4>What do you actually need?</h4><p> - check fridge/freezer cupboards before you shop. Know what you already have. </p>
//         <h4> What in your fridge?</h4><p>move older food to the front of the shelf and make space for food your buying. Update your shopping list.</p>
//         <p>Think about your week ahead. Who’s in, whose out? Sense check your meal plan and adjust if plans have changed. </p>
//         <h4> Stay in control of shopping</h4><p>Remember to take your shopping list- notes on your phone or a list will keep you focused on buying only what you need.</p>
//         <p>Set your budget before you get to the store - And stick t it. It’ll help to keep your eye on the £s and stay in control of your budget.</p>
//         <p>Find out the best places to store your food - eg most fruit and veg should be kept in the fridge. </p>
//         <p>A good time to check the fridge temperature - take a quick look at your fridge temperature and check its below 5oC this keeps food fresher for longer. </p>
//         <p>Make toast not waste - pop a loaf of bread in the freezer when home from shopping. Freeze food when home from shopping. Simply toast a slice straight from the freezer for a tasty snack ( bread is one of the top 10 most binned foods)</p>
//         <p>The freezer is your friend - most food that is binned is fresh food. Freeze food when you get home from the shop that you know you won’t need until later that week.</p>
//         <h3> Circular Economy</h3> 
//         <p>In a circular economy we keep products in high value economic use for as long as possible. If someone is finished with a product it is reused by someone else. If a product is broken it is repaired. If a product cannot be reused, then its materials which are also valuable resources are recycled</p> 
//         <a href="https://www.circularcommunities.scot/about-us/circular-economy/"> Circular Economy Scotland </a>

//         </div>

//         <h3>Why it Matters</h3>
//         <p> Offsetting your unavoidable CO2 emissions is a practical and immediate way to take ownership of your personal contribution to climate change. With COTAP, you’re addressing global economic inequality too. Offsetting also reveals both the need for cleaner energy sources and opportunities for reducing your carbon footprint.</p>
//         <br></br>
//         <p>Carbon offsetting should not be done in place of taking steps to reduce one’s carbon footprint. Carbon offsetting and carbon footprint reduction should be done in tandem. Measuring your carbon footprint not only reveals where you’re currently at, but also helps to identify areas for improvement and track your progress.
// Offsetting the amount which you are not able to avoid empowers you to take full responsibility for your carbon pollution, which is your contribution to climate change. In this context, COTAP offers a unique and meaningful solution in that we focus on certified forestry projects in least-developed regions that create life-changing income for the world’s poorest people.</p>

// </div>

// </> 
        
        
    )
}

export default HintsPage;