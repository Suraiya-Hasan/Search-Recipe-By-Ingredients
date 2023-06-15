async function getMealList(searchtext) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchtext}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch meal list');
    }
}

async function getMealRecipe(mealId) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.meals[0];
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch meal recipe');
    }
}

export { getMealList, getMealRecipe };
