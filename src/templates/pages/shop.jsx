import {useEffect, useState} from "react";
import {NavLink, useParams} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategorySidebar from "../components/category-sidebar";
import AddToCart from "../components/add-to-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import useProducts from "../../hook/useProducts";

export default function Category() {
    const {data: productList, isLoading, error} = useProducts();
    let {categoryName} = useParams();
    const categoryNames = categoryName ? productList.filter(category => category.category === categoryName) : productList;
    const products = categoryNames.map((product) => {
        return (
            <li key={product.title.replace(/\s+/g, '-').toLowerCase()} className="product" id={`product-${product.id}`}>
                <div className="product-image">
                    <NavLink to={"/shop/" + product.category + "/" + product.id}>
                        <LazyLoadImage
                            alt={product.brand}
                            src={product.thumbnail}
                        />
                        <span className="product-brand">{product.brand}</span>
                    </NavLink>
                </div>
                <div className="product-info">
                    <div className="product-info_holder">
                        <div className="product-rating">
                            {product.rating}
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="product-name">
                            <NavLink to={"/shop/" + product.category + "/" + product.title.replace(/\s+/g, '-').toLowerCase()}>
                                {product.title}
                            </NavLink>
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
                {error ?? error}
                <ul className="grid grid-cols-3 gap-4">
                    {isLoading ? '...loading...' : products}
                </ul>
            </div>
        </section>
    )
}