import {NavLink, useParams} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategorySidebar from "../components/category-sidebar";
import AddToCart from "../components/add-to-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import useAllProducts from "../../hook/useAllProducts";
import {useState} from "react";
import Breadcrumbs from "../components/beadcrumbs";
// import ProductSorting from "../default/product-sorting";

export default function Category() {
    const pages = [];
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [skip, setSkip] = useState(0)
    const {categoryName} = useParams();
    const {data, isLoading, error} = useAllProducts(categoryName, itemsPerPage, skip);
    const products = data.products.map((product) => {
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
    const handleItemsPerPage = (event)=> {
        setItemsPerPage(event.target.value)
        setSkip(0)
    }
    const handleLoadMoreProducts = (event) => {
        event.stopPropagation();
    }

    const handleGoToPage = (event)=> {
        event.preventDefault();
        const pageNumber = Number(event.target.attributes.getNamedItem("data-page-number").value);
        setSkip(pageNumber * itemsPerPage)
        event.target.classList.add('bg-blue-500')
    }
    for (let i = 0; i < Math.ceil(data.total / itemsPerPage); i++) {
        pages.push(
            <button key={i}
                    onClick={handleGoToPage}
                    className="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1 mb-1"
                    data-page-number={i}>{i + 1}</button>
        );
    }
    return(
        <>
            <Breadcrumbs categoryName={categoryName} product={''}/>
            <section className="section-category flex gap-4">
                <CategorySidebar/>
                <div className="section-category_block w-9/12">
                    {error ?? error}
                    {/*<ProductSorting sort={products}/>*/}
                    <select name="sort"
                            id="per-page"
                            defaultValue={itemsPerPage}
                            onChange={handleItemsPerPage}>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="33">33</option>
                    </select>
                    <ul className="grid grid-cols-3 gap-4">
                        {isLoading ? '...loading...' : products}
                    </ul>
                    <div className="paging">
                        {pages}
                    </div>
                    {/*<button*/}
                    {/*    onClick={handleLoadMoreProducts}*/}
                    {/*    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">*/}
                    {/*    Load More*/}
                    {/*</button>*/}
                </div>
            </section>
        </>
    )
}