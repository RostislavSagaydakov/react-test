import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategorySidebar from "../components/category-sidebar";

export default function Category() {
    const [productList, setProductList] = useState([]);
    let {categoryName} = useParams();
    useEffect(() => {
        const fetchData = async (productListUrl) => {
            const response = await fetch(productListUrl)
            const data = await response.json()
            setProductList(data.products)
        }
        const productListUrl = 'https://dummyjson.com/products'
        fetchData(productListUrl)
    }, []);
    const categoryNames = productList.filter(category => category.category === categoryName);
    const products = categoryNames.map((product, index) => {
        return (
            <li key={index} className="product">
                <div className="product-image">
                    <a  href={"/shop/" + product.category + "/" + product.title.replace(/\s+/g, '-').toLowerCase()}>
                        <LazyLoadImage
                            alt={product.brand}
                            src={product.thumbnail}
                        />
                        <span className="product-brand">{product.brand}</span>
                    </a>
                </div>
                <div className="product-info">
                    <div className="product-rating">{product.rating}</div>
                    <div className="product-name">
                        <a href={"/shop/" + product.category + "/" + product.title.replace(/\s+/g, '-').toLowerCase()}>{product.title}</a>
                    </div>
                    <div className="product-price">
                        {product.discountPercentage && <span className='product-discount'>-${product.discountPercentage}</span>}
                        <span className="product-price">${product.price}</span>
                    </div>
                </div>
            </li>
        );
    })
    return(
        <section className="section-category">
            <CategorySidebar/>
            <div className="section-category_block">
                <ul>
                    {products}
                </ul>
            </div>
        </section>
    )
}