import CategoryItem from "./CategoryItem";

export default function CategoryList({ catalog = [] }) {

    return (
        <div className="CategoryList">
            {catalog.length ? (catalog.map(item => (
                <CategoryItem key={item.idCategory} {...item}/>
            ))) : <h3>No result</h3>}
        </div>
    )
}