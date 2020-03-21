const express = require("express");
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const MONGO_URL=process.env.MONGO_URL;


mongoose.connect(MONGO_URL,{userNewUrlParse:true});
const db = mongoose.connection;

//copied from https://mongoosejs.com/docs/index.html
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to db');
  // we're connected!
});

// one schema is one object - if you have an array, you should create multiple? 
// this is for the data structure 
const emotionList = mongoose.Schema({
    //make sure you couldnt type the same 
    type: String
    // food: Array
});

const foodsList = mongoose.Schema({
    ingredient: String,
    description: String,
    source: String,
    recipes: Array
})

const recipeList = mongoose.Schema({
    recipeName: String,
    description: String,
    ingredientsDetails: Array,
    instructions: Array,
    url: String,
    imgUrl: String
});

  const emotions = mongoose.model("EmotionList", emotionList);

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"))
});

// const contents = fs.readFileSync(path.join(__dirname, "./data/moodforfood.json"));
// const obj = JSON.parse(contents);
// const emotions = obj.emotions;

// function getEmotions() {
//     let emotionType = [];
//     emotions.forEach((e) => {
//         emotionType.push(e.type);
//         // console.log(emotionType);
//     })
//     return emotionType;
//     // return emotions;
// }
//get emotion and display relevant info of cuisines 
let foodList = [];

function getFood() {
    emotions.forEach(e => {
        foodList.push(e.food);
    });
    return foodList;
}

function GetRandomRecipe(num) {
    getFood();
    let recipes = [];
    foodList[num].forEach(e => {
        //randomizing the recipes within the ingredient 
        recipes.push(e.recipes[random(0,e.recipes.length-1)]);
    });
    return recipes;
}

function random(min, max) {
    return Math.floor(Math.random() * (max-1-min));
}

app.get("/emotions", (req, res) => {
    console.log("emotions list requested!!!");


    // emotions.find({}).sort({name:-1 }).exec((err, docs) => {
    //     res.json(docs);
    //   });

    // should get input based on the selection on the main page 
    res.json(emotions);

});

app.get("/moodforfood", (req, res) => {
    console.log("moodforfood requested!!!");
    const food = GetRandomRecipe(0);
    res.json(food);

});


//do i need post? - to add more database in the future yes, 
// app.post("/emotions", (req, res) => {
//     const emotions = req.body.emotions;
//     const emotionType;
//     emotions.forEach(e=>{
//         emotionType=e.type;
//         console.log(emotionType);
//     });
//     // const food = req.body.food;
// return emotionType;

// });


app.listen(3000, () => {
    console.log("Server is listening on port 3000!");
});