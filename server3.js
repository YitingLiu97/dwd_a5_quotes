const express = require("express");
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
let foodLimit=6;

require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;

//copied from https://mongoosejs.com/docs/index.html
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to db');
    // we're connected!
});

const recipeSchema = mongoose.Schema({
    emotionType: String,
    recipeName: String,
    description: String,
    ingredientsDetails: [
        String
    ],
    instructions: [
        String
    ],
    url: String,
    imgUrl: String,
    specialIngredient: {
        name: String,
        description: String,
        source: String
    }
});

const recipeModel = mongoose.model("recipeModel", recipeSchema);
console.log(recipeModel);

app.use(express.static("public"));
app.use(express.json());

function random(min, max){
    return Math.floor(Math.random()*(max-1-min));
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views/about.html"))
});

app.get("/recipes", (req, res) => {
    recipeModel.find({}, (err, docs) => {
        res.json(docs);
        // console.log(recippe);
    });
});

app.get("/recipes/anger", (req, res) => {
    recipeModel.find({emotionType:"anger"}, (err, docs) => {
        res.json(docs);
        // console.log(recippe);
    }).skip(random(0,18)).limit(foodLimit);
});

app.get("/recipes/sad", (req, res) => {
    recipeModel.find({emotionType:"sad"}, (err, docs) => {
        res.json(docs);
        // console.log(recippe);
    }).skip(random(0,20)).limit(foodLimit);
});

app.get("/recipes/stressed", (req, res) => {
    recipeModel.find({emotionType:"stressed"}, (err, docs) => {
        res.json(docs);
    }).skip(random(0,18)).limit(foodLimit);
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000!");
});