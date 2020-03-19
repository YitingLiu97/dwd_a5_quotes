const express = require("express");
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static("public"));
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"))
});

const contents = fs.readFileSync(path.join(__dirname, "./data/moodforfood.json"));
const obj = JSON.parse(contents);
const emotions = obj.emotions;

function getEmotions() {
    let emotionType = [];
    emotions.forEach((e) => {
        emotionType.push(e.type);
        // console.log(emotionType);
    })
    return emotionType;
    // return emotions;
}
//get emotion and display relevant info of cuisines 
let foodList = [];

function getFood(num) {
    emotions.forEach(e => {
        foodList.push(e.food);
        // console.log(foodList);
        // console.log(emotionType);
        console.log(foodList[num]);
    });

    return foodList[num];

}

function GetRandomRecipe(num) {
    getFood(num);

    console.log(foodList[0]);
    let recipes = [];
    foodList[0].forEach(e => {
        //randomizing the recipes within the ingredient 
        recipes.push(e.recipes[random(0, recipes.length)]);
    })

    return recipes;

}

function random(min, max) {
    return Math.floor(Math.random() * (max - min));
}

app.get("/emotions", (req, res) => {
    console.log("emotions list requested!!!");
    let emotions = getEmotions();

    // res.json(emotions);
    //0 is anger
    //1 is sad
    //2 is stressed

    // should get input based on the selection on the main page 

    //how to get the req from user to replace the number below?
    // const angerFood = GetRandomRecipe(0);
    // res.json(angerFood);
    res.json(emotions);

});

app.get("/moodforfood", (req, res) => {
    console.log("moodforfood requested!!!");
    // let emotions = getEmotions();

    // res.json(emotions);
    //0 is anger
    //1 is sad
    //2 is stressed

    // should get input based on the selection on the main page 

    //how to get the req from user to replace the number below?
    const food = GetRandomRecipe(0);
    res.json(food);
    // res.json(emotions);

});

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