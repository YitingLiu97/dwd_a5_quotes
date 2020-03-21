// connect to mongodb
// read the json file newdb.json
// loop through `recipes` array
// for ever member of the array, insert into mongodb

const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');

let content = fs.readFileSync('data/newdb.json');
let obj = JSON.parse(content);
let recipes = obj.recipes;

require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;

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

//copied from https://mongoosejs.com/docs/index.html
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to db');
    recipeModel.insertMany(recipes,(err,docs)=>{
        if (err){
            console.log('error',err);
        }else{
        console.log('success');
    }
    });
    // we're connected!
});
