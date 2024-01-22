import {NavLink, useParams} from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategorySidebar from "../components/category-sidebar";
import AddToCart from "../components/add-to-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import useAllProducts from "../../hook/useAllProducts";
import {useState} from "react";
import Breadcrumbs from "../components/beadcrumbs";
import Pagination from "../components/pagination";
import Loader from "../components/loader";
// import ProductSorting from "../default/product-sorting";

export default function Category() {
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [skip, setSkip] = useState(0)
    const {categoryName} = useParams();
    const {data, isLoading, error} = useAllProducts(categoryName, itemsPerPage, skip, setSkip);
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
                    {isLoading && <Loader/>}
                    <ul className="grid grid-cols-3 gap-4">
                        {!isLoading && products}
                    </ul>
                    <Pagination skip={skip} itemsPerPage={itemsPerPage} total={data.total} setSkip={setSkip}/>
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