import { useHistory } from "react-router-dom"
import Meal from "./Meal"

export default function MealsList({ meals }) {
    const { goBack } = useHistory();

    return (
        <>
            <button className="btn" onClick={() => goBack()}>Back</button>
            <div className="list category-list">
                {meals.map(item => (
                    <Meal key={item.idMeal} {...item}/>
                ))}
            </div>
        </>
    )
}