![Alt text](/images/co2becomeone_logo.png ?raw=true)

# co2become_one
JS Project with Colin, Lucy and Matthew

# Personal CO2 Footprint Checker

You have been approached by a lifestyle consultancy company dealing with environmental sustainability. 
Your task is to build a personal CO2 footprint checker app that calculates a user's CO2 footprint based on their lifestyle.

# MVP

A user should be able to:

<li>submit values for various aspects of their lifestyle (e.g. diet, commute, 
recycling and heating routine, holiday habits, etc) and view their CO2 footprint. 
You'll need to create your own (simple) tested model to calculate this.
<li>update the values to see the effect on their CO2 footprint.
<li>view the CO2 footprint result in a visually interesting way.

# Extensions

<li>A page that shows a world with and without responsible carbon footprint management.
<li>Multiple ways to display the data
<li>Can delete a user’s data.
<li>An interesting error page.

------------------------------------------------------------

# Installs Used

# Server

 <li>npm init -y
 <li>npm install express
 <li>npm install react-router-dom
 <li>npm install mongodb@3.5.7
 <li>npm install --save-dev cors
 <li>npm install --save-dev nodemon

 <li>npm install -D @testing-library/react@12.1.5
 <li>npm install -D cypress
  
# In seeds folder

 <li>"start": "node server.js". 
 <li>"server:dev": "nodemon server.js"	
 <li>"seeds": "mongosh < ./db/seeds.js"


 # Client

 <li>npm install react-bootstrap 
 <li>npm install bootstrap 
 <li>npm install styled-components
 <li>npm install react-router-dom
 <li>npm install highcharts —save
  

-----------------------------------------------------

 # To run 
 npm i in client and server files 

 # Client file
 npm start 

 # Server file

 npm run seeds 
 npm run server:dev
