import recipes from "./recipe.js";

const recipesGrid = document.getElementById('recipesGrid');
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
