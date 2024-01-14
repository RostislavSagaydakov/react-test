import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import useCategories from "../../../hook/useCategories";

function Navigation() {
    const {categories} = useCategories();
    // console.log(categories.data)
    const categoriesList = categories.data.map((name, index) => {
        return (
            <li key={index}><NavLink to={"/shop/" + name}>{name.replace(/-/g, ' ')}</NavLink></li>
        );
    })

    return (
        <nav>
            <ul className="menu flex gap-4 menu-top_level">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">
                        <span className="mr-4">Shop</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </NavLink>
                    <ul className="menu_dropdown grid grid-cols-2 gap-4 drop-shadow-md ">
                        {categoriesList}
                    </ul>
                </li>
                <li><NavLink to="/contact">Contact us</NavLink></li>
                <li><NavLink to="/blog">Articles</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;