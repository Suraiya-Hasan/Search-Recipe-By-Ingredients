export const mealList = document.getElementById('meal');
export const mealDetailsContent = document.querySelector('.meal-details-content');
export const recipeCloseBtn = document.getElementById('recipe-close-btn');

function renderMealList(meals) {
    let html = '';

    if (meals === null || meals.length === 0) {
        html = 'Sorry, we did not find any meal';
        mealList.innerHTML = html;
        mealList.classList.add('notFound');
        return;
    }

    meals.forEach(meal => {
        html += `
      <div class="meal-item" data-id="${meal.idMeal}">
        <div class="meal-img">
          <img src="${meal.strMealThumb}" alt="food">
        </div>
        <div class="meal-name">
          <h3>${meal.strMeal}</h3>
          <a href="#" class="recipe-btn">Get Recipe</a>
        </div>
      </div>
    `;
    });

    mealList.classList.remove('notFound');
    mealList.innerHTML = html;
}

function renderMealRecipe(meal) {
    let html = `
    <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <div class="recipe-instruct">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>
    <div class="recipe-meal-img">
      <img src="${meal.strMealThumb}" alt="food">
    </div>
    <div class="recipe-link">
      <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
    </div>
  `;

    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}

export { renderMealList, renderMealRecipe };
