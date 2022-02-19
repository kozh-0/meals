import Meal from "./Meal"

export default function MealsList({ meals }) {
    return (
        <div className="list category-list">
            {meals.map(item => (
                <Meal key={item.idMeal} {...item}/>
            ))}
        </div>
    )
}