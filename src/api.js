import { API_URL } from "./config";

// lookup.php?i=52772
const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
}

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}
// filter.php?c=Seafood
const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return await response.json();
}
// filter.php?a=Canadian
const getArea = async (areaName) => {
    const response = await fetch(API_URL + 'filter.php?a=' + areaName);
    return await response.json()
}


export { getMealById, getAllCategories, getFilteredCategory, getArea };