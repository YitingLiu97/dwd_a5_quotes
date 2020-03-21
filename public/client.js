
window.addEventListener('DOMContentLoaded', async () => {
    console.log('client js here');
    const resforEmo = await fetch("/emotions");
    const resforFood = await fetch("/moodforfood");
    const emotions = await resforEmo.json();
    const foodList = await resforFood.json();

    // const  emotionList= document.getElementById('moodforfood');
    fetch('/emotions').then(res => res.json()).then((data) => {
        // console.log(data);// this shows the randomrecipelist
        console.log(emotions);//this shows an array of emotions
        dropdownOutput(data);//output one emotion selected 

    });

    fetch('/moodforfood').then(res => res.json()).then((data) => {
        displayFood(data);// this shows the randomrecipelist

        //why does it sometimes who can't read the property of null - e is null somehow upon refresh 
        // fixed becuase of the length of the recipes is different 
        // data.forEach(e => {
        //     recipeName.push(e.recipeName);

        // })
        // console.log(recipeName);
        // foodList.innerHTML = FoodforMood(data);
        // dropdownOutput(data);


    });

});


function dropdownOutput(data) {
    const buttonMain = document.getElementById('moodtofood');
    const emotionList = document.getElementById('SelectEmotion');
    const outputBox = document.getElementById('output');
    let selectedEmotion;

    buttonMain.addEventListener('click', async function () {
        selectedEmotion = emotionList.options[emotionList.selectedIndex].value;

        data.forEach(e => {
            if (selectedEmotion === e) {
                selectedEmotion = e;
                console.log(userReq(selectedEmotion));
            }

        });
        outputBox.innerHTML = `Because you are feeling ${selectedEmotion}`;

    });

}

function userReq(mood) {
    let userReq;
    if (mood == "anger") {
        userReq = 0;
    } else if (mood == "sad") {
        userReq = 1;
    } else if (mood == "stressed") {
        userReq = 2;
    } else {
        console.error('you have to select mood');
    }
    return userReq;
}

function displayFood(foodList){

    const foodContent = document.getElementById('foodContent');
    const foodName = document.createElement('h2');
    const foodDescription = document.createElement('p');
    const readmorelink = document.createElement('a');
    const foodImg = document.createElement('img');

    foodName.setAttribute('id','foodName');

    foodImg.setAttribute('id','foodImg');
    
    foodContent.append(foodName);
    foodName.appendChild(foodImg);
    
    foodDescription.setAttribute('id','foodDes');
    foodName.appendChild(foodDescription);

    readmorelink.setAttribute('id','readmore');

    // const detailsList;
    // const instructionsList = document.createElement('li');

    // const recipeDetails = document.createElement('div');
    // recipeDetails.setAttribute('class','recipeDetails');   

    // const detailOL = document.createElement('ol');
    // detailOL.setAttribute('id','detailOL');
    // const instructionOL = document.createElement('ol');
    // instructionOL.setAttribute('id','instructionOL');

    // recipeDetails.append(detailOL);
    // recipe.append(instructionOL);

   


    foodList.forEach(e=>{
        foodName.innerHTML=e.recipeName;

        foodImg.src=e.imgUrl;
        foodImg.alt=e.recipeName;
        // foodImg.setAttribute('a',e.url);

        // console.log(foodImg.src);   
        // detailsList.innerHTML=e.ingredientsDetails;
        foodDescription.innerHTML=e.description;



        // let recipeDetailUL = document.createElement('ul');
        // document.getElementsByClassName('recipeDetails').appendChild(recipeDetailUL);
        // //show ingredient details in a list
        // let detailList = document.createElement('li');
        // recipeDetailUL.appendChild(detailList);
        // detailList.innerHTML+=e;

    //    const detailsList=e.ingredientsDetails.map((detail)=>{
    //        const singleDetail = document.createElement('li');
    //        singleDetail.innerHTML=detail;
    //    });
            // console.log(`detail is ${detail}`);
            // return `<li>${detail}</li>`
        // }).join("");
    

        //show instructions in a list
        // const instructionsList=e.instructions.map((instruction)=>{
        //     console.log(`instruction is ${instruction}`);
        //     return `<li>${instruction}</li>`
        // }).join("");

        readmorelink.src=e.url;
        readmorelink.innerHTML='read more';
        console.log(readmorelink.src);

        return `food name: ${foodName},<br>
                food description: ${foodDescription}`

    })





}

// function FoodSimpleContent(name,desciption,img){





// }


// function recipeInfo(details,instructions,readmore){

// }



// function dropdownOutput(){
//     const buttonMain = document.getElementsById("moodtofood");

//     buttonMain.addEventListener('click',function(){
//         console.log('buttonclicked');

//     });

// }

// function moodselected() {
//     const selectEmotion = document.getElementById('SelectEmotion');
//     const emotionSelected = selectEmotion.getElementsByTagName('option')[selectEmotion.selectedIndex];
//     console.log(emotionSelected);




// }
//if the emotion is selected - id
// function FoodforMood(mood) {

//     //select anger, show anger food 
//     const anger = document.getElementById("anger");
//     const sad = document.getElementById("sad");
//     const stressed = document.getElementById("stressed");


// }




//dropdown and button example - not working well 
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedOptions

//get the display of the information 

