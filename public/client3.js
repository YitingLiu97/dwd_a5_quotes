window.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch("/recipes");
    const recipes = await response.json();
    const recipeContainer = document.getElementById('recipeContainer');

    const buttonMain = document.getElementById('moodtofood');
    const emotionList = document.getElementById('SelectEmotion');
    const outputBox = document.getElementById('output');
    let selectedEmotion = "sad";

    buttonMain.addEventListener('click', async function () {
        selectedEmotion = emotionList.options[emotionList.selectedIndex].value;
        outputBox.innerHTML = `Because you are feeling ${selectedEmotion}`;

        fetch(`/recipes/${selectedEmotion}`).then((res) => res.json()).then((data) => {
            recipeList(data);
            console.log(recipeList(data))
            recipeContainer.innerHTML = recipeList(data);
        })
            .catch((err) => {
                console.log(err);
            });
    });

});


function recipeList(recipes) {
    return recipes.map(recipe => {
        console.log(recipe);
        recipeCard(recipe);
        // console.log(recipe.emotionType);

        // console.log( recipeCard(recipe));
        // console.log(recipe);

    })
}

function recipeCard(recipe) {

    // console.log(recipe.imgUrl);
    return `<div>
        <h2>${recipe.recipeName}</h2>
        <img src="${recipe.imgUrl}" width="200px">
        <p>${recipe.description} </p>
    </div>`;

}

// function instructions(recipe){
//     return `<div class="rightSide">
//         ${recipe.instructions.map(e).join('')}
//     </div>`;

// }

// function ingredients(recipe){
//     return `<div class="leftSide">
//         ${recipe.ingredientsDetails.map(e).join('')}
//     </div>`;
// }