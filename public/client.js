// window.addEventListener('DOMContentLoaded', async () => {
//     const response = await fetch("/emotions");
//     const food = await response.json();
//     // moodselected();


//     // const foodList = document.getElementById('moodforfood');
//     // fetch('/emotions').then(res => res.json()).then((data) => {
//     //     foodList.innerHTML = FoodforMood(data.body)
//     // })

//     //if click on the button id moodforfood - direct to another page 
//     // const buttonMainPage = document.getElementById('moodtofood');
//     // buttonMainPage.onclick = async () => {
//     //     moodselected(anger);

//     // }

// }


// to know which emotion is selected 


// )


window.addEventListener('DOMContentLoaded',  () => {
    console.log('client js here');
    // const response = await fetch("/emotions");
    // const food = await response.json();

    const foodList = document.getElementById('moodforfood');
    // fetch('/emotions').then(res => res.json()).then((data) => {
    //     console.log(data);// this shows the randomrecipelist
    //     // foodList.innerHTML = FoodforMood(data);
    //     dropdownOutput(data);


    // });

    fetch('/moodforfood').then(res => res.json()).then((data) => {
        console.log(data);// this shows the randomrecipelist
        let recipeName=[];
        data.forEach(e=>{
            recipeName.push(e.recipeName);

        })
        console.log(recipeName);
        // foodList.innerHTML = FoodforMood(data);
        // dropdownOutput(data);


    });
 

});

function dropdownOutput(data) {
    const buttonMain = document.getElementById('moodtofood');
    const emotionList = document.getElementById('SelectEmotion');
    const outputBox = document.getElementById('output');

    buttonMain.addEventListener('click', function () {
        let selectedEmotion = emotionList.options[emotionList.selectedIndex].value;

        data.forEach(e => {
            if (selectedEmotion === e){
                selectedEmotion = e;
                // console.log(selectedEmotion);
                displayRecipe(selectedEmotion);
            }
            
        });
        outputBox.innerHTML=selectedEmotion;

    });

}

function displayRecipe(mood){

    // console.log('recipe here');
}

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

