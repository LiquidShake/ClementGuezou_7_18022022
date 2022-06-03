import { displayFilters } from "./displayFilters";
import recipes from "./recipe.js";

export function searchInput(idInput, itemClass) {
    /* L'input de recherche et son contenu */
    const searchbar = document.getElementById(idInput);
    let searchbarVal;
    /* les cartes de recettes et leurs contenus */
    const items = Array.from(document.getElementsByClassName(itemClass));
    let itemVal;

   

    /* On récupère le texte à l'interieur de l'input a chaque frappe sur le clavier */
    searchbar.addEventListener('keyup', () => {
        const recipesFound = new Array();
        /* On actualise la variable a chaque fois */
        searchbarVal = searchbar.value.toLowerCase();
        /* On boucle sur les recettes */
        for(let i = 0; i < items.length; i++){
            /* On récupère le texte de chaque recette */
            itemVal = items[i].innerText.toLowerCase();
            /* Si la chaine récupérée dans l'input est contenu dans le texte de la recette on l'affiche */
            if(itemVal.includes(searchbarVal)){
                items[i].style.display = 'block';
                recipesFound.push(items[i].getAttribute('id'));
            /* Sinon on la masque */
            }else{
                items[i].style.display = 'none';
            }
        }
        displayFilters(recipes, recipesFound);
    })
}

export function searchInputv2(idInput, itemClass){

      /* L'input de recherche et son contenu */
      const searchbar = document.getElementById(idInput);
      let searchbarVal;
      /* les cartes de recettes et leurs contenus */
      const items = Array.from(document.getElementsByClassName(itemClass));

      /* On récupère le texte à l'interieur de l'input a chaque frappe sur le clavier */
      searchbar.addEventListener('keyup', () => {
        var startTime = performance.now();
        /* On actualise la variable a chaque fois */
        searchbarVal = searchbar.value.toLowerCase();

        items.forEach((item) => {
            if(item.innerText.toLowerCase().includes(searchbarVal)){
                item.style.display = 'block';
            /* Sinon on la masque */
            }else{
                item.style.display = 'none';
            }
        })
        var endTime = performance.now();
    })
}

