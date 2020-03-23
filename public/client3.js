window.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch("/recipes");
    const recipes = await res.json();
    const recipeContainer = document.getElementById('recipeContainer');

    const buttonMain = document.getElementById('moodtofood');
    const emotionList = document.getElementById('SelectEmotion');
    const outputBox = document.getElementById('output');
    const buttonBottom = document.getElementById('tryAgain');
    let selectedEmotion;

    buttonMain.addEventListener('click', async function () {

        selectedEmotion = emotionList.options[emotionList.selectedIndex].value;
        outputBox.innerHTML = `Because you are feeling <span id="emotionTag" style="font-weight:bold">${selectedEmotion}</span>. `;

        fetch(`/recipes/${selectedEmotion}`).then((res) => res.json()).then((data) => {

            recipeContainer.innerHTML = recipeList(data);
            document.getElementById('output').scrollIntoView({
                behavior: 'smooth'
            });

            buttonBottom.style.visibility="visible";

        }).catch((err) => {
            console.log(err);
        });
    });

    funpart();
    // window.onscroll = function () { scrollFunction() };
    buttonBottom.addEventListener('click', function(){window.scroll({
            top:0,
            left:0,
            behavior:'smooth'
        });
    });
});


function recipeList(recipes) {
    //just look using foreach 
    console.log(recipes);
    let recipe = "";
    recipes.forEach(e => {
        recipe += recipeCard(e);
    });
    // a block is {} a single expression is ();
    // if using block, should have return, () doesn't need to write return, it has implicit return
    return recipe;
}

function recipeCard(recipe) {

    return `<div class="recipeCard">
    <a href="${recipe.url}"><img src="${recipe.imgUrl}">
        <h2 class="text">${recipe.recipeName}</h2>
        <p class="text">${recipe.description} </p></a>
    </div>`;

}

// function instructions(recipe) {
//     return `<div class="rightSide">
//         ${recipe.instructions.map(e).join('')}
//     </div>`;

// }

// function ingredients(recipe) {
//     return `<div class="leftSide">
//         ${recipe.ingredientsDetails.map(e).join('')}
//     </div>`;
// }

//get mouse poisition and change the background color
//inspo: https://github.com/jipark119/second-website/blob/master/scripts.js

function random(min, max) {
    return Math.floor(Math.random() * (max - 1 - min));
}

function randomLocation() {
    const w = screen.width;
    const h = screen.height;
    const randomX = random(0.1 * w, 0.9 * w);
    const randomY = random(0.1 * h, 0.9 * h);
    return [randomX, randomY];
}

function funpart() {
    document.addEventListener('mousemove', changeColor);
    document.addEventListener('mouseleave', resetColor);
    document.addEventListener('keypress', randomEmoji);
}


let changeColor = (e) => {
    let r = e.x,
        g = e.y,
        b = (r + g) / 2;
    if (r > 255) {
        r = r / screen.width * 255;
    }
    if (g > 255) {
        g = g / screen.width * 255;
    }

    return document.body.style.backgroundColor = `rgb(${r},${g},${b},0.5)`,
        document.getElementById('output').style.color = `rgb(${b},${g},${r})`,
        document.getElementById('SelectEmotion').style.backgroundColor = `rgb(${r},${g},${b})`,
        document.getElementById('moodtofood').style.color = `rgb(${r},${g},${b})`,
        document.getElementById('Yiting').style.color = `rgb(${r},${g},${b})`,
        document.getElementById('tryAgain').style.color=`rgb(${r},${g},${b})`;

}

let resetColor = (e) => {
    return document.body.style.backgroundColor = 'white',
        document.getElementById('output').style.color = 'black',
        document.getElementById('SelectEmotion').style.backgroundColor = 'black',
        document.getElementById('moodtofood').style.color = 'black',
        document.getElementById('Yiting').style.color = 'black',
        document.getElementById('tryAgain').style.color='black';

    ;
}

// let emojiText = (e) => {

//     let text = document.getElementById('emojis');

//     // text.setAttribute('p', "Any Key to Add Emoji, Space Bar to Clear");
//     text.innerHTML = "Any Key to Add Emoji, Space Bar to Clear";
//     text.style.top = '0';
//     text.style.left = '0';

//     return console.log(text);

// }
//whereever key is pressed, generate emoji in random position 
let randomEmoji = (e) => {
    let xy = randomLocation();
    let keyNum, emojiShow, emojiUrl, emoji;

    // console.log('xy', xy);
    keyNum = e.keyCode || e.which;
    emojiShow = document.getElementById('emojis');

    emojiUrlArr = ['assets/banana.png', 'assets/cherries.png', 'assets/kiwifruit.png', 'assets/lemon.png', 'assets/mango.png', 'assets/melon.png', 'assets/pear.png', 'assets/pineapple.png', 'assets/red-apple.png', 'assets/strawberry.png', 'assets/tangerine.png', 'assets/watermelon.png']
    emojiUrl = emojiUrlArr[random(0, emojiUrlArr.length)];
    emoji = document.createElement('img');

    //space bar to cancel all the emoji on the canvas keyNum=32
    emoji.src = emojiUrl;
    emojiShow.append(emoji);
    if (keyNum === 32) {
        emojiShow.innerHTML = '';
    } else {
        emoji.style.width = '5%';
        emoji.style.position = 'relative';
        // emoji.style.left = "vw";
        // emoji.style.position='absolute';
        emoji.style.top = `${xy[0]}px`;
        emoji.style.right = `${xy[1]}px`;
        // console.log('emojiShow', emojiShow);
        // console.log('keyNum', keyNum);
    }


}

// document.addEventListener('keypress', emojiText);

// let cursorUrlArr=['assets/avocado.png','assets/banana.png'];

// let changeCursor = (e) => {
//     const cssValue = `url('${cursorUrlArr[0]}'),auto;`;
//     document.body.style.cursor = cssValue;
//     // cursor.url=cursorUrlArr[0];

//     console.log(cssValue);
//     //    cursor ='none';
//     // console.log(cursor.url);

// }

// document.addEventListener('mousemove', changeCursor);
// document,addEventListener('mouseover',)

// changeColor();

//scroll down to the bottom, shows up the text - tryAgain button 

// function scrollFunction() {
//     let pageLength = document.documentElement.scrollHeight;

//     if (document.body.scrollTop + screen.height-pageLength<20) {
//         buttonBottom.style.visibility = "visible";
//     } else {
//         buttonBottom.style.visibility = "hidden";
//     }
// }