export function displayFilters(recipes){

    displayIngredients(recipes);
    displayUstensils(recipes);
    displayAppliance(recipes);
    openFilters();

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
            tagToCard();
        })
    })

    tags.forEach((tag) => {
        tag.addEventListener('click', () => {
            tag.classList.remove('active');
            tagToCard();
        })
    })
}

function tagToCard(){
    const activeTags = Array.from(document.getElementsByClassName('active'));
    const recipes = Array.from(document.getElementsByClassName('recipe'));
    let tagVal;
    let recipeVal;

    if(activeTags.length > 0){
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
    }else{
        recipes.forEach((recipe) => {
            recipe.style.display = 'block';
        })
    }
}

function displayIngredients(recipes){
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
                ingredientsList.innerHTML += `<li class="ingredient-item item">${ingredient.ingredient.toLowerCase()}</li>`;
            } 
        })
    );
}

function displayUstensils(recipes){
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
                ustensilsList.innerHTML += `<li class="ustensil-item item">${ustensil.toLowerCase()}</li>`;
            } 
        })
    );
}

function displayAppliance(recipes){
    const applianceList = document.getElementById('appareils-list');
    const list = new Array();

    recipes.map((recipe) => {
        /* On regarde si l'appareil est deja présent dans la liste */
        if(list.includes(recipe.appliance.toLowerCase())){
            /* Si oui on ne fait rien */
        }else{
            /* Si non, on l'ajoute à la liste */
            list.push(recipe.appliance.toLowerCase());
            applianceList.innerHTML += `<li class="appliance-item item">${recipe.appliance.toLowerCase()}</li>`;
        }
    });
}

function openFilters(){
    
    const filtersContainers = Array.from(document.getElementsByClassName('filters-container'));

    filtersContainers.forEach((container) => {
        /* On observe les enfants du container */
        const children = Array.from(container.children);
        /* On récupère la liste de filtres */
        const filtersList = children.find(element => element.classList.contains('filtersList'));

        /* On ajoute une classe quand le container prend le focus */
        container.addEventListener('focusin', () => {
            container.classList.add('opened');
            /* On affiche la liste d'options */
            filtersList.style.display = 'grid';
            filterToTag("item");
            
        });
        /* On la retire quand il le perd */
        container.addEventListener('focusout', () => {
            container.classList.remove('opened');
            /* On masque la liste d'options */
            filtersList.style.display = 'none';
        });

    })

     
}