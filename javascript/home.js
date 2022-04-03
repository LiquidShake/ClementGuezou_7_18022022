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

    // LISTEN INPUT BARRE DE RECHERCHE
export let IS_GOOGLE = (recipes) => {
    console.log("TEST1")
  const takeIt = document.querySelector("#searchbar");

  takeIt.addEventListener("input", () => {
    // si le nbre de lettre dépasse 2 alors :  LANCER ALGO
    if (takeIt.value.length > 2) {

        console.log("TEST2")
      const googledRecipes = theMillTurns(recipes, takeIt.value);
      const googledRecipesDistinct = deleteDuplicatesGoogled(googledRecipes);

      cards.DISPLAY_CARDS(googledRecipesDistinct);
      filters.DISPLAY_FILTERS(googledRecipesDistinct);
      isFilterReload(recipes);
    } else {
      // SINON TABLEAU DES RECETTES
      cards.DISPLAY_CARDS(recipes);
      isFilterReload(recipes);
      // ON VIDE LE TABLEAU DES TAGS
      while (tagsArray.length > 0) {
        tagsArray.pop();
      }
      showListOfTags(tagsArray);

      document.querySelectorAll(".filter__custom-option").forEach((li) => {
        li.classList.add("filter__custom-option");
        li.classList.remove("filter__custom-option--enable");
      });
    }
  });
};


IS_GOOGLE(recipesJSON);