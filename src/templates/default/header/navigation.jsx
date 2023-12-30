import {NavLink} from 'react-router-dom'
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Navigation() {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        const fetchData = async (productListUrl) => {
            const response = await fetch(productListUrl)
            const data = await response.json()
            setProductList(data.products)
        }
        const productListUrl = 'https://dummyjson.com/products'
        fetchData(productListUrl)
    }, []);
    const loadedCategories = productList.map((categoryName, key) => categoryName.category);
    const filteredCategories = [...new Set(loadedCategories)];
    const categories = filteredCategories.map((name, index) => {
        return (
            <li key={index}><NavLink to={"/shop/" + name}>{name}</NavLink></li>
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
                        {categories}
                    </ul>
                </li>
                <li><NavLink to="/contact">Contact us</NavLink></li>
                <li><NavLink to="/blog">Articles</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;