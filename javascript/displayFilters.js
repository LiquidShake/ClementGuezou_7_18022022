export function displayFilters(recipes){

    displayIngredients(recipes);
    displayUstensils(recipes);
    displayAppliance(recipes);

}

function filterToTag(itemClass){
    const filters = Array.from(document.getElementsByClassName(itemClass));
    const tags = Array.from(document.getElementsByClassName('tag'));
    let tagVal;

    
    filters.forEach((filter) => {
        filter.addEventListener('click', () => {
            let filterValue = filter.innerText.toLowerCase();
            for(let i = 0; i < tags.length; i++){
                tagVal = tags[i].innerHTML.toLowerCase();
                if (tagVal == filterValue) {
                    tags[i].classList.add('active');
                }
            }
        })
    })

    tags.forEach((tag) => {
        tag.addEventListener('click', () => {
            tag.classList.remove('active');
        })
    })
}

function tagToCard(){
    const activeTags = Array.from(document.getElementsByClassName('active'));
    const recipes = Array.from(document.getElementsByClassName('recipe'));
    let tagVal;
    let recipeVal;

    activeTags.forEach((tag) => {
        tagVal = tag.innerHTML.toLowerCase();
        for (let i = 0; i < recipes.length; i++) {
            recipeVal = recipes[i].innerText.toLowerCase();
            if (recipeVal.includes(tagVal)) {
                recipes[i].style.display = 'block';
            }else{
                recipes[i].style.display = 'none';
            }
            
        }
    })
}

function displayIngredients(recipes){
    const ingredientsInput     = document.getElementById('ingredients');
    const ingredientsContainer = document.getElementById('ingredients-container');
    const ingredientsList      = document.getElementById('ingredients-list');
    const list = new Array();

    recipes.map(recipe =>
        /* Boucle sur les ingredients */
        recipe.ingredients.map((ingredient) => {
            /* On regarde si l'ingredient est deja présent dans la liste */
            if(list.includes(ingredient.ingredient.toLowerCase())){
              /* Si oui on ne fait rien */
            }else{
                /* Si non, on l'ajoute à la liste */
                list.push(ingredient.ingredient.toLowerCase());
                ingredientsList.innerHTML += `<li class="ingredient-item">${ingredient.ingredient.toLowerCase()}</li>`;
            } 
        })
    );
    
    /* On ajoute une classe quand l'input prend le focus */
    ingredientsInput.addEventListener('focus', () => {
        ingredientsInput.classList.add('opened');
        /* On affiche la liste d'options */
        ingredientsContainer.style.display = 'block';
        filterToTag("ingredient-item");
        tagToCard();
    });
    /* On la retire quand il le perd */
    ingredientsInput.addEventListener('blur', () => {
        ingredientsInput.classList.remove('opened');
        /* On masque la liste d'options */
        ingredientsContainer.style.display = 'none';
    });
}

function displayUstensils(recipes){
    const ustensilsInput     = document.getElementById('ustensiles');
    const ustensilsContainer = document.getElementById('ustensils-container');
    const ustensilsList      = document.getElementById('ustensils-list');
    const list = new Array();

    recipes.map(recipe =>
        /* Boucle sur les ustensils */
        recipe.ustensils.map((ustensil) => {
            /* On regarde si l'ustensil est deja présent dans la liste */
            if(list.includes(ustensil.toLowerCase())){
              /* Si oui on ne fait rien */
            }else{
                /* Si non, on l'ajoute à la liste */
                list.push(ustensil.toLowerCase());
                ustensilsList.innerHTML += `<li class="ustensil-item">${ustensil.toLowerCase()}</li>`;
            } 
        })
    );

    /* On ajoute une classe quand l'input prend le focus */
    ustensilsInput.addEventListener('focus', () => {
        ustensilsInput.classList.add('opened');
        /* On affiche la liste d'options */
        ustensilsContainer.style.display = 'block';
        filterToTag("ustensil-item");
        tagToCard();
    });
    /* On la retire quand il le perd */
    ustensilsInput.addEventListener('blur', () => {
        ustensilsInput.classList.remove('opened');
        /* On masque la liste d'options */
        ustensilsContainer.style.display = 'none';
    });
}

function displayAppliance(recipes){
    const appareilsInput     = document.getElementById('appareils');
    const appareilsContainer = document.getElementById('appareils-container');
    const applianceList      = document.getElementById('appareils-list');
    const list = new Array();

    recipes.map((recipe) => {
        /* On regarde si l'appareil est deja présent dans la liste */
        if(list.includes(recipe.appliance.toLowerCase())){
            /* Si oui on ne fait rien */
        }else{
            /* Si non, on l'ajoute à la liste */
            list.push(recipe.appliance.toLowerCase());
            applianceList.innerHTML += `<li class="appliance-item">${recipe.appliance.toLowerCase()}</li>`;
        }
    });

    /* On ajoute une classe quand l'input prend le focus */
    appareilsInput.addEventListener('focus', () => {
        appareilsInput.classList.add('opened');
        /* On affiche la liste d'options */
        appareilsContainer.style.display = 'block';
        filterToTag("appliance-item");
        tagToCard();
    });
    /* On la retire quand il le perd */
    appareilsInput.addEventListener('blur', () => {
        appareilsInput.classList.remove('opened');
        /* On masque la liste d'options */
        appareilsContainer.style.display = 'none';
    });
}