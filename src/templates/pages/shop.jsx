import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategorySidebar from "../components/category-sidebar";
import AddToCart from "../components/add-to-cart";
import {connect} from "react-redux";

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
    const categoryNames = categoryName ? productList.filter(category => category.category === categoryName) : productList;
    const products = categoryNames.map((product) => {
        return (
            <li key={product.title.replace(/\s+/g, '-').toLowerCase()} className="product" id={`product-${product.id}`}>
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
                    <div className="product-info_holder">
                        <div className="product-rating">
                            <div className="rating" style={{width: Math.round(product.rating * 10) + "%"}}></div>
                        </div>
                        <div className="product-name">
                            <a href={"/shop/" + product.category + "/" + product.title.replace(/\s+/g, '-').toLowerCase()}>{product.title}</a>
                        </div>
                        <div className="product-price">
                            {product.discountPercentage && <span className='product-discount'>-{product.discountPercentage}%</span>}
                            <span className="product-price">${product.price}</span>
                        </div>
                    </div>
                    <AddToCart element={product}/>
                </div>
            </li>
        );
    })
    return(
        <section className="section-category flex gap-4">
            <CategorySidebar/>
            <div className="section-category_block w-9/12">
                <ul className="grid grid-cols-3 gap-4">
                    {products}
                </ul>
            </div>
        </section>
    )
}