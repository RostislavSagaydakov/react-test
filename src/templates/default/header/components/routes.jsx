import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageError from '../../../pages/error'
import PageHome from '../../../pages/home';
import PageShop from '../../../pages/shop';
import PageProduct from '../../../pages/product';
import PageContact from "../../../pages/contact";
import BlogArticles from "../../../pages/articles";
import Cart from "../../../pages/checkout/cart";
import Checkout from "../../../pages/checkout/checkout";
import BaseHeader from "../../header";

function RoutesFromMainMenu() {
    return (
        <BrowserRouter>
            <BaseHeader/>
            <main className="container mx-auto">
                <Routes>
                    <Route exact path="/" element={<PageHome/>}/>
                    <Route exact path="/shop" element={<PageShop/>}/>
                    <Route exact path="/shop/:categoryName" element={<PageShop/>}/>
                    <Route exact path="/shop/:categoryName/:productId" element={<PageProduct/>}/>
                    <Route exact path="/contact" element={<PageContact/>}/>
                    <Route exact path="/blog" element={<BlogArticles/>}/>
                    <Route exact path="/checkout/cart" element={<Cart/>}/>
                    <Route exact path="/checkout" element={<Checkout/>}/>
                    <Route path="*" element={<PageError/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default RoutesFromMainMenu;