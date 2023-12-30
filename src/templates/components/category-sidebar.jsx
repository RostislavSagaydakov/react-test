import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export default function CategorySidebar(props) {
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
        <aside className="section-category_sidebar w-3/12">
            {categories}
        </aside>
    )
}