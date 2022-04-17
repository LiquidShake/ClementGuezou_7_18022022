import recipesJSON from "./recipe.js";
import { displayCards } from "./displayCards.js";
import { displayTags} from "./displayTags.js";
import { searchInput } from "./searchInput.js";
import { displayFilters } from "./displayFilters.js"

displayCards(recipesJSON);
displayTags(recipesJSON);
displayFilters(recipesJSON);

searchInput('searchbar', 'recipe');
searchInput('ingredients', 'ingredient-item');
searchInput('appareils', 'appliance-item');
searchInput('ustensiles', 'ustensil-item');