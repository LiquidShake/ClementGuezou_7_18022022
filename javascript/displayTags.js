const divTags = document.getElementById('tags');

export function displayTags(recipes){
    /* On construit une array avec chaque occurence des ingredients, ustensils, et appareils de la liste de recette */
    const allTags = new Array();
    recipes.map(recipe =>
        /* Boucle sur les ingredients */
        recipe.ingredients.map((ingredient) => {
            /* On regarde si l'ingredient est deja présent dans la liste */
            if(allTags.includes(ingredient.ingredient.toLowerCase())){
              /* Si oui on ne fait rien */
            }else{
                /* Si non, on l'ajoute à la liste */
                allTags.push(ingredient.ingredient.toLowerCase());
                divTags.innerHTML += `<span class="tag tag-ingredient">${ingredient.ingredient.toLowerCase()}</span>`;
            } 
        })
    );
    recipes.map(recipe =>
        /* Boucle sur les ustensils */
        recipe.ustensils.map((ustensil) => {
            /* On regarde si l'ustensil est deja présent dans la liste */
            if(allTags.includes(ustensil.toLowerCase())){
              /* Si oui on ne fait rien */
            }else{
                /* Si non, on l'ajoute à la liste */
                allTags.push(ustensil.toLowerCase());
                divTags.innerHTML += `<span class="tag tag-ustensil">${ustensil.toLowerCase()}</span>`;
            } 
        })
    );
    recipes.map((recipe) => {
        /* On regarde si l'appareil est deja présent dans la liste */
        if(allTags.includes(recipe.appliance.toLowerCase())){
            /* Si oui on ne fait rien */
        }else{
            /* Si non, on l'ajoute à la liste */
            allTags.push(recipe.appliance.toLowerCase());
            divTags.innerHTML += `<span class="tag tag-appareil">${recipe.appliance.toLowerCase()}</span>`;
        }
    });
}