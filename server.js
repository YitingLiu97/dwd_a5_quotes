const express = require("express");
const path = require('path');
const fs =require('fs');

const app = express();

app.use(express.static("public"));
app.use(express.json());


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"))
});

app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"views/about.html"))
});


const contents =fs.readFileSync(path.join(__dirname,"./data/db.json"));
const obj = JSON.parse(contents);

function getEmotions(){
    const emotions = obj.emotions;
    console.log(emotions); 
}
//get emotion and display relevant info of cuisines 

function getFood(){
    const food = obj.food;
    console.log(food); 

}

// function randomNum(min, max){
//     return Math.floor(Math.random() * (max - min)) + min;

// }
function getRandomRecipe(){
    const recipeArr=obj.food[2].ingredientsIndividual.recipes;
    // console.log(recipeArr);
    const randomRecipe=recipeArr[Math.floor(Math.random()*(recipeArr.length-1))];
    // res.json(randomRecipe)
    console.log(Math.floor(Math.random()*(recipeArr.length-1)));
    console.log(randomRecipe);
    
}

app.get("/emotions",(req,res)=>{
    const emotions=getEmotions();
    const food=getFood();
    const recipe=getRandomRecipe();
    res.json(emotions);
    res.json(food);
    res.json(recipe);


});






app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});