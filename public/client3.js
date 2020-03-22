window.addEventListener('DOMContentLoaded', async () => {

    const res = await fetch("/recipes");
    const recipes = await res.json();
    const recipeContainer = document.getElementById('recipeContainer');

    const buttonMain = document.getElementById('moodtofood');
    const emotionList = document.getElementById('SelectEmotion');
    const outputBox = document.getElementById('output');
    // const sds = window.location.search()
    let selectedEmotion;
    // customizeCursor();

    buttonMain.addEventListener('click', async function () {
  
        selectedEmotion = emotionList.options[emotionList.selectedIndex].value;
        outputBox.innerHTML = `Because you are feeling ${selectedEmotion}. `;

        fetch(`/recipes/${selectedEmotion}`).then((res) => res.json()).then((data) => {
            //recipeList(data);
            // console.log(recipeList(data));
            recipeContainer.innerHTML = recipeList(data);
            document.getElementById('output').scrollIntoView({
                behavior:'smooth'
            });

            // window.scrollTo(0,540);
            // console.log(recipeList(data));
            // console.log()
        }).catch((err) => {
            console.log(err);
        });
    });

});

//customize cursor with different emojis related to food 
// function customizeCursor(){
//     const cursor= document.createElement('id','mycursor');
//     cursor.onmousemove=applyCustomCursor(e=>{
//         cursor.style=e.clientX+'px';
//     });
   
    // cursor.setAttribute('')
    // cursor.

    // cursor.cursor.url="https://www.google.com/search?q=images&sxsrf=ALeKk02ro07Hz2blbjP7wG2QYcJ98K03Lg:1584834274926&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiQ7e_f36zoAhWNdd8KHeb2Db0Q_AUoAXoECAsQAw&biw=785&bih=748#imgrc=_2JirDBiGzi3lM";
    // cursor.cursor="🍇";
    // console.log(cursor.cursor);
    // cursor.style.cursor('🍇');
// }


function recipeList(recipes) {
    //just look using foreach 
    console.log(recipes);
    let recipe="";
    recipes.forEach(e => {
        recipe+=recipeCard(e);   
    });    // a block is {} a single expression is ();
    // if using block, should have return, () doesn't need to write return, it has implicit return
    return recipe;
}

function recipeCard(recipe) {
    return `<div class="recipeCard">
    <a href="${recipe.url}"><img src="${recipe.imgUrl}">
    <div class="text">
        <h2 >${recipe.recipeName}</h2>
        <p >${recipe.description} </p></div></a>
    </div>`;

}

function instructions(recipe){
    return `<div class="rightSide">
        ${recipe.instructions.map(e).join('')}
    </div>`;

}

function ingredients(recipe){
    return `<div class="leftSide">
        ${recipe.ingredientsDetails.map(e).join('')}
    </div>`;
}

// function footer(){
//     return `<div class="footer"><p>Mood for Food is created by 
//     <a href="https://yitingliu97.wordpress.com/">Yiting Liu</a>
//     </p>
//     </div>`;
// }
