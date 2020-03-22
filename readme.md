<!-- Every README should start with an H1 -->
# The Mood for Food Project
<!-- A one sentence description of the project or assignment -->
A website offers food options based on emotions by user input. 

![Homepage Demo](https://github.com/YitingLiu97/mood_for_food/blob/master/photos/homepage.png)

<!-- It is good practice to add an about or summary -->
<!-- ## About -->
## About
I am a foodie and everytime I think about what I want to eat next meal after meal. I enjoy the process of exploring amazing food to make or to eat out. However, it could be exhuasting at times. Also, my mood affects what I want to eat. I want to combine my mood with food searching tools to create a whimsical and playful search engine for food to make or food to get. 


<!-- It is essential to describe how to set up your project -->
## Setup
<!-- some potential npm libraries for this project are: -->

npm libraries used:
1. [dotenv](https://www.npmjs.com/package/dotenv)
2. [express](https://www.npmjs.com/package/express)
3. [mongoose](https://www.npmjs.com/package/mongoose)
4. [morgan](https://www.npmjs.com/package/morgan)
5. [node](https://www.npmjs.com/package/node)
6. [nodemon](https://www.npmjs.com/package/nodemon)

Clone the repo and install npm library, you can do as below in your terminal:
```sh
npm install dotenv express mongoose morgan nodemon node
```

<!-- Clone the repo and install npm library [inspirational-quotes](https://www.npmjs.com/package/inspirational-quotes) -->
<!-- Any knowledge or tools you will need before hand -->
### Prerequisites

1. [VS Code](https://code.visualstudio.com/)
2. A good understanding of API, html, CSS, Javascript, and node.
3. Familiar with npm libraries and backend.  

<!-- any installation needs should be defined -->
### Installation

<!-- Write instructions on how to start working on your project -->
<!-- ### Develop

To develop this document, you can follow the steps provided below:
1. create a fork of this project on Github
2. ping the author of this repo via Github Issues to see if they are looking for contributions on the specific feature you're looking to add
3. open the file in VS Code and make updates 
4. add and commit those changes in your forked github repo
5. make a pull request specifying what additions and changes were made
6. have a nice chat and communication with me about those changes. 
7. celebrate the contribution!  -->

<!-- Notes about the deployment -->
### Deployment

This project is hosted on Github ande deployed on Heroku. 

## Built with

* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)

## Authors

* [Yiting Liu](https://www.yliudesigns.com) -- ITP 2021-- [NYU ITP](https://itp.nyu.edu)

<!-- ## Code of Conduct

Please read the [CODE OF CONDUCT](https://www.mozilla.org/en-US/about/governance/policies/participation/)  -->

## License

[Attribution 4.0 International (CC BY 4.0) ](https://creativecommons.org/licenses/by/4.0/)

<!-- thank and reference all the things that made your project happen -->
## Acknowledgements
Thanks to the help of [Cassie Tarakajian](https://github.com/catarak), [Tito](https://github.com/tirtawr), and [Zeyao Li](https://github.com/zeyaoli), without them, this project wouldn't be as accomplished as it is now. 

<!-- * [inspirational-quotes](https://www.npmjs.com/package/inspirational-quotes)
* [Back-end-foundation-workbook](https://github.com/itp-dwd/back-end-foundations-workbook) -->
<!-- * [Creative Commons](https://creativecommons.org/licenses/by/4.0/) for their licensing documentation
* [Openmoji project](https://www.openmoji.org/library/#search=notebook&emoji=1F4D4) for their glyphs
* [PurpleBooth's Readme Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) -->


<!-- For your assignments you might consider  -->
# Notes & Process

I have a general idea of the wireframe of this webpage. 

Next steps: 
1. look for npm libraries and API for moods and food 
2. search for similar search engine and analyze it
3. create a data model for the information 

<!-- How you built this project - Include images, gifs, and notes here -->
## Process & Documentation
### Webflow
Here are the user interface flow of my website. 

![General Webflow](https://github.com/YitingLiu97/mood_for_food/blob/master/photos/webflow.png)

<!-- Any specific challenges or struggles documented -->
## Challenges & Struggles

### Front End - Flexbox 
### Front End - Hover Effect  
### Front End - Cursor Customization

### Back End - Data Structure 
I was confused at first about the database to MongoDB since I wasn't clear of the order of making the data structure.

I was thinking how user would access the data at first and I was trying to be super ambitious in building a very comprehensive database where almost all the information will be displayed. I didn't use MongoDB at first since I was building my own JSON file. It turns out connecting to MongoDB using Mongoose would make the whole process easier. 

I did conquer the part of showing the content with my previous data structure before using any MongoDB. 

However, things became extremely difficult for me to find certain variable within the JSON file. After consulting with Cassie, she recommended me to think of the flow of the data before creating a data structure. The flow would be 

```sh
Emotion Types ==> Recipe Information ==> Further Details of Special Ingredients ==> Link to Url
```

### Back End - MongoDB 
I then  updated my data structure to fit the flow of it and used MongoDB. There were some obstacles for me. I couldn't get the update of the collection of the database on [MongoAtlas](https://www.mongodb.com/cloud/atlas). Later, I discovered that I should replace the text in the URL with my app name. In this case, I need to replace the text with 
```sh
mood-for-food
```

### Deployment to Heroku

I was having trouble deploying to Heroku. It shows me "Application Error" and when I checked log, it shows "npm ERR".

![Heroku Error](https://github.com/YitingLiu97/mood_for_food/blob/master/photos/Heroku%20Error.png)


<!-- Any questions you have -->
## Questions and Next Steps
I would like to link user to another webpage with the collection of food images. When they click on the images, they will be directed to another page with customized design showing ingredient details and instructions. For this project till Mar. 21, 2020, I achieved in displaying the information in the index.html. I would like to make it more cohesive and comprehensive. 

I also want to customize the cursor into some food or drink emojis and I would like them to change according to the mouse position on the canvas. 

### Questions:
1. How to move the content of images to another page?
2. How to customize cursor with images or emojis that change according to the mouse position? 


<!-- References for resources and inspiration -->
## References
* [Zeyao Li's work](https://github.com/zeyaoli/Laura-Dern-API)
* [BBC good food](https://www.bbcgoodfood.com/recipes/category/cuisines)
* [Research on mood for food](https://docs.google.com/spreadsheets/d/1R3hvB-oSJMKauBgnzyUCVXndSItdwuIQi5NXpZDHloA/edit?usp=sharing) 
<!-- 
* [xxx](xx) -->
