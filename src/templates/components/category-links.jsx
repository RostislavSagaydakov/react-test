import {NavLink} from 'react-router-dom'
import useCategories from "../../hook/useCategories";

function CategoryLinks() {
    const {data} = useCategories();
    const categoriesList = data.map((name, index) => {
        return (
            <li key={index}><NavLink to={"/shop/" + name}>{name.replace(/-/g, ' ')}</NavLink></li>
        );
    })
    return (
        <>
            {categoriesList}
        </>
    )
}

export default CategoryLinks;