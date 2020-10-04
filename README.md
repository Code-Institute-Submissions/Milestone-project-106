#Live website https://elena-pakhmurskaia.github.io/Milestone-project-2/

# **Milestone Project 2 - Refueling with LNG**

## **Aim of the project**
Truck Refueling website was designed to give a comprehensive overview of Shell and third party LNG providers in Europe. Third party LNG providers are - Rolande, Avia, Airliquide. 
The main goals of the website are:
1.	give the latest overview of all Shell and third party LNG refueling stations,
2.	have correct locations of the stations,
3.	enable drivers to plan their journey,
4.	indicate where the customer card is accepted. 

### **Background**
There are not many LNG refueling stations, which makes it important to plan a journey well, so that the truck can be refueled on the way from A to B. 
Also, LNG stations are not represented correctly on Google map, which makes it difficult for drivers to find a station. 
Next, not all LNG stations in Europe accept Shell LNG card.

If logistic company chooses Shell as LNG provider, the drivers of this company receive a Shell LNG card with which they can pay for refueling at a certain discount. 
As Shell has a partnership with Rolande, Avia, Airliquide, drivers can refuel at this stations at a certain discount as well. 
It is important for site owners and site users to have the most updated view on the location of the stations. 
The owners can benefit from the volumes sold at the stations promoted by this website. 
The users can benefit form the discounts given by the Shell LNG card and can plan their journey better.

## **UX**

### **User stories by roles**

This website will be used by people who are likely to have following roles:
A site owner – Shell fleet solution management team
A potential site visitor 1 – truck driver who has an international route (within Europe).
A potential site visitor 2 – fleet manager of a logistics company that needs more information about LNG network in Europe.
A potential site visitor 3 – anyone who wants to learn more about LNG network in Europe.

As a site owner:

a.	I need to provide the latest information about the LNG stations location,
b.	I need to have correct address and location of the stations on map,
c.	I need to indicate which stations accept Shell LNG card,
d.	I need to show to the user, which stations are Shell branded and which are branded by other LNG providers.

As a site visitor 1:

a.	I want to see an overview of all available LNG stations in Europe. 
b.	I want to see how many LNG stations are there in Europe and where they are located.
c.	I need to make sure that there is a refueling station on my way.
d.	I need to make sure that I can use my customer card at the refueling station.
e.	I want to plot the route in Google map so that I can follow the navigation.
f.	I want to know how long does the journey take in km.
g.	I want to know how long does the journey take in hours.

As a site visitor 2:

a.	I need to know how extensive the LNG network is in Europe and whether it covers my company’s operational countries.
b.	I need to make sure that the drivers can use a customer card in different locations. 
c.	I can check how long does a typical journey take in hours and km.
d.	I need to know who are the other LNG providers in Europe.

As a site visitor 3:

a.	I want to know who provides LNG in Europe,
b.	I want to know how many stations are there right now,
c.	I want to know which countries have LNG stations.

### **Design**
1. Color Scheme: https://www.schemecolor.com/shades-of-green.php
2. Typography: The Montserrat font is the main font used throughout the whole website 
3. Images were used only for the logos on the map. the images are available to the public


### **Wireframes**
Wireframes for laptop/desktop, tablet, and mobile are available here https://balsamiq.cloud/s7wry95/pc6qc9u
Wireframes show all the actions that are used in design of the website: 
a. Navbar value;
b. Get Route button and change in the view of the page with the click.

## **Features**

This website is very simple in structure. It has a Home page and a Directions page.

### **Home page Features:**
* In jumbotron, as a users  I can see right away how many LNG and Shell stations are there. 
The countdown shows the number of the stations only if I load/reload the page. 
* Button "Shell and TPN overview" refreshes the static view of the map on the click. 
As a user I can click on this button to refresh the overview of the stations.
* Button "Get directions" takes users to a separate page where the form can be filled. 
As a user I can click on this button Get Directions.
* Embedded Google map shows the static view of all stations.
As a user I can see all the stations on the map.
* As a user I can drag the map.
* The map is centered.
* Icons appear on the map with animation - bounce.
* As a user I can click on each icon to open an info window.
* The map has a legend. As a user I can differentiate between different providers.

## **Features left to implement**
1. Show all the stations that are available along the route. When user gets directions, he/she can see where are the stations.
2. Calculate detouring. As a user I can see if I need to detour to refuel, and how long is detour in km.
3. Show "get directons" on the same page to make a one page website that is easier to navigate.

## **Technologies used**

- Bootstrap – https://getbootstrap.com/
The project uses Bootstrap to simplify the process of building a grid layout, implementing forms, and creating buttons. 
Bootstrap was also used for responsive design.
- JQuery – https://jquery.com/
JQuery was used for responsive design of the buttons.
- Google Maps API Features:
a. Google Map Directions API
b. Google Map Distance Matrix API
c. Maps Javascript API
d. Places API

### **Languages used:**

- HTML
- CSS
- Javascript

## **Testing**

* The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- W3C Markup Validator - https://validator.w3.org/#validate_by_input
- W3C CSS Validator - https://jigsaw.w3.org/css-validator/#validate_by_input

### **Testing User Stories from the UX Section**
Please see the document here https://drive.google.com/file/d/199YWcMkGQQtsACmxa3bp6yIz1OksQ5fQ/view?usp=sharing

###Responsive design
The project was designed for all screen sizes, namely: laptop/desktop, tablet, mobile. 
All features are available on the large screen devices. Mobile devices dont have count up and have simplifies jumbotron

## **Deployment**

### **Deployment – Live Website**

*Create repository in GitHub and give it a relevant name.
*Click on your repository to open it.
*Find the “settings” tab and click on it.
*Scroll down until you arrive at the “GitHub Pages” sections.
*Under the “source” drop down menu, choose a branch. I chose “master branch” and select it.
*You will then see a URL to your live webpage. In my case the URL is https://elena-pakhmurskaia.github.io/Milestone-project-2/

### **Deployment – Run Locally**

*Click on the repository called Elena-Pakhmurskaia/Milestone_2.
*Along the top bar, find the “clone or download” button.
*Here you have the option to clone by HTTPS or SSH.
*Once you have chose your desired option, then click the copy icon next to the URL.
*Open Git Bash.
*Ensure you are in the correct directory which you want to copy the code into. If not, change the directory now.
*In the terminal, write the $ git clone https://elena-pakhmurskaia.github.io/Milestone-project-2/
*Press the enter button and your clone will be created.


## **Credits**
I took NGVA website as an idea for this project: https://www.ngva.eu/stations-map/

## **Content**
All content is taken from publically available sources, no intellectual rights were violated. All text was written by developer.
