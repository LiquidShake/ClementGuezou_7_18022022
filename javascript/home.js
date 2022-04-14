import recipesJSON from "./recipe.js";

const recipesGrid = document.getElementById('recipesGrid');

const DISPLAY_CARDS = (recipes) => {
    recipes.map(recipe =>
        recipesGrid.innerHTML += `<article class="recipe">
                                    <img src="https://source.unsplash.com/random/" />
                                    <div class="content">
                                        <div class="content-head">
                                            <span class="titre">${recipe.name}</span>
                                            <span class="timer">${recipe.time} min</span>
                                        </div>
                                        <div class="ingredients">
                                            ${recipe.ingredients.map(ingredient =>
                                                `<div class="ingredient"><strong>${ingredient.ingredient}:</strong>
                                                ${ingredient.quantity ? ingredient.quantity : ''}${ingredient.unit ? ingredient.unit : ''}</div>`
                                            )}
                                        </div>
                                        <div class="description">
                                            ${recipe.description}
                                        </div>
                                    </div>
                                </article>`
    );
}

DISPLAY_CARDS(recipesJSON);

/* L'input de recherche et son contenu */
const searchbar = document.getElementById('searchbar');
let searchbarVal;
/* les cartes de recettes et leurs contenus */
const cards = Array.from(document.getElementsByClassName('recipe'));
let cardVal;

/* On récupère le texte à l'interieur de l'input a chaque frappe sur le clavier */
searchbar.addEventListener('keyup', () => {
    /* On actualise la variable a chaque fois */
    searchbarVal = searchbar.value;
    /* On boucle sur les recettes */
    for(let i = 0; i < cards.length; i++){
        /* On récupère le texte de chaque recette */
        cardVal = cards[i].innerText.toLowerCase();
        /* Si la chaine récupérée dans l'input est contenu dans le texte de la recette on l'affiche */
        if(cardVal.includes(searchbarVal)){
            cards[i].style.display = 'block';
        /* Sinon on la masque */
        }else{
            cards[i].style.display = 'none';
        }
    }
})