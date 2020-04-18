# AL DENTE

An Online Restaurant Reservation Platform

## Project Description

The project is a reservation platform for restaurants. There will be two type of users, customers and restaurant/business owners. Both of which will have their own separate account portal once they signed up for an account on the website. For customers, they will be able to browse through restaurants displayed on the platform (basic restaurant information) and make a reservation through the website's system. Customers will then be able to see their list of made reservations (including past reservations) on their account page. For restaurant owners, once they log in to the system,they will be able to see and manage reservations made at their diners. **To access the Owner Dashboard, you can use the demo account -> Username: ownerdemo Password: ownerdemo**

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
- Helped with the database design for our collections and how to render/modify data through our features (add/delete reservation add/delete restaurant).
- Implemented some features that include deleting reservations/restaurnts and some fields/logic in the reservation system.
- **Initiative/Added Contribution**: My contribution included clearly defining the possible work flows of users. With this in mind, we came up with a design that was implementable for the term. Not only did we include the key functionalites of a reservation system, we went beyond including a portal for owners to instantaneously manage their resturaunts. One of our main goals were to make the user flows as intiuitive as possible and our demo was a great example of that.

#### Austin
- Designed the layout of homepage and restaurant pages and created many of the compenents involved.
- **Initiative/Added Contribution**: Helped implement social media login which allowed users to login to our app with a Google or Facebook account

### Functionality
- Brief summary of all the functionalities implemented can be found at https://a1dente.herokuapp.com/about
- To access the Owner Dashboard, you can use the demo account -> Username: ownerdemo Password: ownerdemo
- Implemented all Minimum Requirements, all Standard Requirements and #1 of Stretch Requirements as listed before
- For more details on method of implementation and design choice regarding some of the Minimum and Standard Requirements, refer to the Challenge section.

### Challenges, Learning and Future Directions

#### Challenge #1: Validating reservations 
Reservations require a lot of validation such as making sure the user entered the correct date into each field. We were faced with the decision to do this on the front-end (verify the form input before it submits to the backend db) or backend. We didn't figure out the pros and cons of the two choices in terms of performance in the end so we decided to just do it in the backend by taking the information submitted by the form and verifying it against the collections schema we created before as the schema provides the validation functionality already.

#### Challenge #2: Securing accounts
We were having trouble coming up with a way to secure our user accounts, which is our Standard Requirement #2. Initially, we wanted to implement two factor authentication on top of our existing login system (Meteor Accounts) but we later found out that the Meteor package we are using for login is accounts-ui, which doesn't allow for much customization. This means that we would have to re-implement our Login system from scratch (without using that package) in the last few weeks of the project. Taking our time constraint into mind, we decided that it'd be best to spend the time and resources we have left to avoid this and find a workaround to accomplish this. We ended up choosing to add social media logins (Google and Facebook) onto our Login system as they are compatible with Meteor's account-ui package and Google and Facebook itself has 2FA functionality.

### Challenge #3: Routing Menu Items
Brief summary of [issue](https://github.com/aolingo/cpsc436project/issues/43#issuecomment-513523628): When trying to add the Owner and Customer Dashboard onto the website's navigation bar, we ran into bunch of bugs. Our intended workflow for the menu is when an user log in, depending on their role (customer or owner) the menu will show their respective dashboard. For example, when an user login, the Menu will check the Meteor userId and if it doesn't belong to that of an owner account (all Owner account Ids are premade, hardcoded), the Menu component will only render the Customer Dashboard, if it's an owner account, it will render both the Customer and Owner dashboard. However, after our initial implementation, you have to manually refresh the page after logging in for the Menu to render the Dashboard items. After bunch of debugging, we found out this is because we are implementing this through conditional rendering and logging in doesn't trigger another call to the Menu component (which is needed to render the two new Dashboards). We found a bunch of proposed solutions online which all involve rewriting our Router. In the end, we decided a 'quick and dirty' fix where we included a check if the current Login state in the Menu component is not undefined (meaning an user just logged in), we trigger a window refresh on the client side.

### Challenge #4: Design Choice for Owner Role Implementation
Our group ran into some difficulties in how we should approach implementing the "owner" role for accounts. For example, our initial idea was to when a visitor of our website register for an account, they are allowed to choose the type of account they want to create: Customer or Restaurant Owner. However, we felt that this isn't secure as anyone could register as an owner and add/modify unlimited Restaurants onto our home page (there's also the concern that they may add fake or random restaurants on our home page). To address this, we thought it was best to create a third role: "admin", which is controlled by us (the developers), and any requests to create a type owner account and add/modify/delete restaurants will send a request to the admin portal to be approved. But by doing it this way, legitimate restaurant owners wouldn't have as much flexibility to manage their restaurants as any changes they make would have to be approved by the admins first. So in the end as a compromise between security and flexibility, we decided to scrap the "admin" role and set that owner type accounts can only be created by us (basically hardcoded user accounts). So any new restaurant owners that want to use our website will have to contact us first and once we verify them, they have full access to the tools available in the Owner dashboard. 

#### Learning: 
What we learned from these challenges is that many challenges you might encounter have already been solved and resources that can help you fix these issues are available if you research properly. In addition, for some of the challenges like #2 and #3, there are different solutions to the problem, some of which takes way more time to implement than others but it's more scalable as well. So given the time constraint of this project, you are forced to choose either solutions that are easier to implement and performs faster but doesn't offer good scalability and security wise or the opposite. For most of the features in our project, we chose easier implementation and fast performance over scalability and security. Thus, scalability and security will be our main focus for future improvements.

#### Future Directions: 
Possible improvements for the future include: 
- Adding more graphs to our Analyze page in the Owner Dashboard 
- Adding an image uploader and storing actual images in our database
- Allowing owners to choose which days the restaurant is closed
- Re-implement all the child components in the Customer and Owner Dashboard components (Add/Edit Restaurant forms, View Reservations, Analyze) as its own separate components with its own route instead of as child components under the Owner Dashboard component for better scalability. 

#### So You Think You Can Hack?
You may have noticed that even though the Owner and Customer Dashboard doesn't appear on the Menu when you aren't logged in, you can still access them if you know the URL to them, especially the Owner Dashboard. Try accessing https://a1dente.herokuapp.com/dashboard/owner logging in or if you're logged in as a type customer account :)
