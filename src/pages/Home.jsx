import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getAllCategories } from "../api";
import Preloader from '../Components/Preloader';
import CategoryList from '../Components/CategoryList';
import Search from '../Components/Search';

export default function Home() {
    const[catalog, setCatalog] = useState([]);
    const[filteredCatalog, setfilteredCatalog] = useState([]);

    const {pathname, search} = useLocation();
    const { push } = useHistory();
    // console.log(push);
    // console.log(pathname, search);
    console.log( search);

    const handleSearch = (str) => {
        setfilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        );
        push({pathname, search: `?search=${str}`})
    }

    useEffect(() => {
        getAllCategories()
        .then((data) => {
            setCatalog(data.categories);
            setfilteredCatalog( search ?
                data.categories.filter(item => 
                item.strCategory
                    .toLowerCase()
                    .includes(search.split('=')[1].toLocaleLowerCase())
                ) : data.categories
            );
        });
    }, [search]);

    return ( 
        <>
            <Search cb={handleSearch}/>
            {!catalog.length ? <Preloader/> : <CategoryList catalog={filteredCatalog}/>}
        </>
    );
}