# co2become_one
JS Project with Colin, Lucy and Matthew

#Personal CO2 Footprint Checker

#You have been approached by a lifestyle consultancy company dealing with environmental sustainability. 
#Your task is to build a personal CO2 footprint checker app that calculates a user's CO2 footprint based on their lifestyle.

# MVP

A user should be able to:

#to submit values for various aspects of their lifestyle (e.g. diet, commute, 
#recycling and heating routine, holiday habits, etc) and view their CO2 footprint. 
#You'll need to create your own (simple) tested model to calculate this.
#to update the values to see the effect on their CO2 footprint.
#view the CO2 footprint result in a visually interesting way.

# Extensions

#A page that shows a world with and without responsible carbon footprint management.
#Multiple ways to display the data
#Can delete a user’s data.
#An interesting error page.

------------------------------------------------------------

# Installs Used

# Server

 npm init -y
 npm install express
 npm install react-router-dom
 npm install mongodb@3.5.7
 npm install --save-dev cors
 npm install --save-dev nodemon

 npm install -D @testing-library/react@12.1.5
 npm install -D cypress

 In seeds folder

 "start": "node server.js". 
 "server:dev": "nodemon server.js"	
 "seeds": "mongosh < ./db/seeds.js"
 npm install highchairs —save


 Client

 npm install react-bootstrap 
 npm install bootstrap 
 npm install styled-components
 npm install react-router-dom

-----------------------------------------------------

 # To run 
 npm i , in client and server files 

 # Client file
 npm start 

 # Server file

 npm run seeds 
 npm run server:dev
