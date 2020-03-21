
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
        // displayFood(data);// this shows the randomrecipelists
        foodContent(data);
        recipeContent(data);

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


function recipeContent(foodList){
    let recipeContent=document.getElementsByClassName('recipeContent'),
    recipeDetails=document.getElementById('recipeDetails'),
    recipeinstructions=document.getElementById('recipeinstructions'),
    readmore=document.getElementById('readmore');

    foodList.forEach(e=>{
        
      e.ingredientsDetails.forEach(i=>{
          recipeDetails.append(i);
          return `${i}<br>`;
      });

      e.instructions.forEach(l=>{
        recipeinstructions.append(l);
        return `${l}<br>`;
      });

      readmore.setAttribute('href',e.url);
      console.log(readmore.href);
    //   readmore.setAttribute('a',readmore.src);
    //   readmore.innerHTML='read more here';
    
    });
}


function foodContent(foodList){
    let foodContent=document.getElementsByClassName('foodContent'),
    name=document.getElementById('foodName'),
    img=document.getElementById('foodImg'),
    description=document.getElementById('foodDescription');

    foodList.forEach(e=>{
        name.innerHTML=e.recipeName;
        // console.log(name);
        img.src=e.imgUrl;
        description.innerHTML=e.description;
    });

    // recipeContent(foodList);
}