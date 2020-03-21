const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();


//   const emotions = mongoose.model("EmotionList", emotionList);

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"))
});

// const contents = fs.readFileSync(path.join(__dirname, "./data/newdb.json"));
// const obj = JSON.parse(contents);
// const emotions = obj.emotions;

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
    let emotions = getEmotions();

    // res.json(emotions);
    //0 is anger
    //1 is sad
    //2 is stressed

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