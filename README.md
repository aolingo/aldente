# AL DENTE

An Online Restaurant Reservation Platform

## High Level Project Description

The project is a reservation platform for restaurants. Used by both customers and restuarant owners.

## Project Description

The project is a reservation platform for restaurants. There will be two type of users, customers and restaurant/business owners. Both of which will have their own separate account portal once they signed up for an account on the website. For customers, they will be able to browse through restaurants displayed on the platform (basic restaurant information) and make a reservation through the website's system. Customers will then be able to see their list of made reservations (including past reservations) on their account page. For restaurant owners, once they log in to the system,they will be able to see and manage reservations made at their diners.

## Project Task Requirements

### Minimum Requirements

1. Browse through a selection of premade restaurants on the website's home page (displayed like cards)
2. Display information of each specific restaurant (introduction, contacts, location, food pictures) in a separate page once the user clicks on its card on the home page
3. A functional reservation system 

### Standard Requirements

1. Account sign up for both customers and restaurant owners and appropriate portal page for them once they log in.
2. Two factor authentication when users sign up for accounts
3. Customer users are able to cancel reservations up until a certain time before reserved date
4. Ability for new restaurant owners to sign up for accounts and input relevant information regarding their restaurant. After which, the platform will parse the info and make a corresponding listing to be featured on the home page.

### Stretch Requirements

1. Basic business analytics tools for restaurant owners when they log in (eg. data visualizations on the number of reservations made in a certain time frame)
2. A corresponding waitlist system so that last minute cancellations on the reservation system will be automatically filled.
3. Possible payment system in which reservations can be prepaid with purchase of tickets

## Sketches

Menu browsing
![menu](https://user-images.githubusercontent.com/22069313/58152387-4e3e9500-7c21-11e9-8db4-7925a3558d49.png)

Customize menu item
![menu2](https://user-images.githubusercontent.com/22069313/58152486-880f9b80-7c21-11e9-93e9-5619b2e0e943.png)

Sign In / Sign Up
![signin](https://user-images.githubusercontent.com/22069313/58152497-8e057c80-7c21-11e9-8fef-a73e09392b5c.png)

## Final Project Submission

### Technology

#### HTML/CSS
- Bootstrap and styled-components for our web app's UI (home page, restaurant page, Reservation and Restaurant forms)
- Sweetalert2 to style our alerts and pop ups when submitting form
#### React JavaScript
- react-router for routing
- react-table for our Owner and Customer Dashboard functionalities (conditional rendering)
- recharts for graph visualization
#### Meteor
- accounts-ui, accounts-facebook, accounts-password and accounts-google package for our login system
- aldeed:collections for use along simpl-schema to attach schema to collection and allows data validation against it
- withTracker for connection to the backend MongoDB (through subscribing to published data in the Meteor server file)
#### MongoDB
- Used the simpl-schema package to design and implement the schema for Restaurants and Reservations
- Used to process reservation work flow
#### Heroku
- Automatically deployed from the master branch through setting up connection between Github and Heroku using the Meteor Buildpack Horse and URL for remote Atlas db

### Contribution

#### Daniel
- Set up the scaffolding of the application including creating all the skeleton components used in the project and organize and reorganizing the Meteor project structure throughout development (making appropriate changes after removing `insecure` and `autopublish`)
- Set up remote database on Atlas, designed and implemented the schema and relations for Restaurants and Reservations collections and populated the database with mock data.
- Implemented front-end and back-end for Homepage, Account system with Google social login, Menu, Owner Dashboard (Add/Edit/Delete Restaurants, View Reservations, Analyze Graphs), Customer Dashboard, and set up Google Map component in Restaurant page (set up and configure API key and settings via Google Developer Console)
- Deployed final project using Heroku
- **Initiative/Added Contribution**: Through designing schema for the MongoDB collections (which isn't necessary for NoSQL dbs), gained more understanding of the similarities and differences between NoSQL and SQL databases and how to effectively "join" the Reservation and Restaurant collections in later queries. Evaluating and choosing to implement the different functionalites in Owner Dashboard as child components helped me gain more insight on using React and its benefits and drawbacks compared to implementing through routing to an another component.

#### George
- Implemented the reservation system used by the application, including back-end work flow and front-end validation.
- Set up page routing for application and implementing dynamic routing for each restaurant page.
- Implemented several Redux actions such as View Restaurant and Reserve (later removed when no longer a requirement).
- **Initiative/Added Contribution**: Instead of setting up basic page routing for restaurants, I decided to implement a dynamic routing where each restaurant has its own unique page URL. That way a user can access a restaurant's page through a link instead of only being able to access it by clicking the View button in the home page.

#### Stefan

#### Austin
- Designed the layout of homepage and restaurant pages and created many of the compenents involved.
- **Initiative/Added Contribution**: Helped implement social media login which allowed users to login to our app with a Google or Facebook account

### Functionality
- Brief summary of all the functionalities implemented can be found at https://a1dente.herokuapp.com/about
- To access the Owner Dashboard, you can use the demo account -> Username: ownerdemo Password: ownerdemo
- Implemented all Minimum Requirements, all Standard Requirements and #1 of Stretch Requirements as listed above

### Challenges, Learning and Future Directions

#### Challenge #1: Validating reservations 
Reservations require a lot of validation such as making sure the user entered the correct date into each field. To address this we used our collection schemas to do a lot of the verifications.

#### Challenge #2: Securing accounts
We were having trouble coming up with a way to secure our user accounts. To address this we decided to implement social media login and Meteor accounts. 

#### Learning: 
What we learned from these challenges is that many challenges you might encounter have already been solved and resources that can help you fix these issues are available if you research properly.

#### Future Directions: 
Possible improvements for the future include: 
- Adding more graphs to our Analyze page in the Owner Dashboard 
- Adding an image uploader and storing actual images in our database
- Allowing owners to choose which days the restaurant is closed
