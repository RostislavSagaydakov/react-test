import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageError from '../../../pages/error'
import PageHome from '../../../pages/home';
import PageShop from '../../../pages/shop';
import PageProduct from '../../../pages/product';
import PageContact from "../../../pages/contact";
import BlogArticles from "../../../pages/articles";
import BaseHeader from "../../header";

function RoutesFromMainMenu() {
    return (
        <BrowserRouter>
            <BaseHeader/>
            <main className="container mx-auto">
                <Routes>
                    <Route exact path="/" element={<PageHome/>}/>
                    <Route path="/shop" element={<PageShop/>}/>
                    <Route exact path="/shop/:categoryName" element={<PageShop/>}/>
                    <Route exact path="/shop/:categoryName/:productName" element={<PageProduct/>}/>
                    <Route exact path="/contact" element={<PageContact/>}/>
                    <Route exact path="/blog" element={<BlogArticles/>}/>
                    <Route path="*" element={<PageError/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default RoutesFromMainMenu;