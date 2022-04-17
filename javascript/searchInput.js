export function searchInput(idInput, itemClass) {
    /* L'input de recherche et son contenu */
    const searchbar = document.getElementById(idInput);
    let searchbarVal;
    /* les cartes de recettes et leurs contenus */
    const items = Array.from(document.getElementsByClassName(itemClass));
    let itemVal;

    /* On récupère le texte à l'interieur de l'input a chaque frappe sur le clavier */
    searchbar.addEventListener('keyup', () => {
        /* On actualise la variable a chaque fois */
        searchbarVal = searchbar.value.toLowerCase();
        /* On boucle sur les recettes */
        for(let i = 0; i < items.length; i++){
            /* On récupère le texte de chaque recette */
            itemVal = items[i].innerText.toLowerCase();
            /* Si la chaine récupérée dans l'input est contenu dans le texte de la recette on l'affiche */
            if(itemVal.includes(searchbarVal)){
                items[i].style.display = 'block';
            /* Sinon on la masque */
            }else{
                items[i].style.display = 'none';
            }
        }
    })
}