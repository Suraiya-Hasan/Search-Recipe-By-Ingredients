import { getMealList, getMealRecipe } from './model.js';
import { renderMealList, renderMealRecipe, recipeCloseBtn, mealDetailsContent } from './view.js';

const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');

function handleSearchBtnClick() {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value.trim();

    getMealList(searchText)
        .then(meals => renderMealList(meals))
        .catch(error => console.error(error));
}

function handleMealListClick(event) {
    event.preventDefault();
    if (event.target.classList.contains('recipe-btn')) {
        const mealItem = event.target.parentElement.parentElement;
        const mealId = mealItem.dataset.id;

        getMealRecipe(mealId)
            .then(meal => renderMealRecipe(meal))
            .catch(error => console.error(error));
    }
}

function handleCloseBtnClick() {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
}

searchBtn.addEventListener('click', handleSearchBtnClick);
mealList.addEventListener('click', handleMealListClick);
recipeCloseBtn.addEventListener('click', handleCloseBtnClick);
