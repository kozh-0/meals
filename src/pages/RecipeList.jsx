import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from "../api";
import Preloader from '../Components/Preloader';
import Recipe from '../Components/Recipe';

export default function RecipeList() {
    const [recipe, setRecipe] = useState([]);
    const {idMeal} = useParams();

    useEffect(() => {
        getMealById(idMeal)
        .then(data => setRecipe(data.meals[0]));
    }, [idMeal]);

    return ( 
        <>
            {recipe.length ? <Preloader/> : <Recipe {...recipe}/>}
        </>
    );
}