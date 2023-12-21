import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageError from '../../../pages/error'
import PageHome from '../../../pages/home';
import PageShop from '../../../pages/shop';
import PageContact from "../../../pages/contact";
import BlogArticles from "../../../pages/articles";

function RoutesFromMainMenu() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PageHome/>}/>
                <Route exact path="/shop" element={<PageShop/>}/>
                <Route exact path="/contact" element={<PageContact/>}/>
                <Route exact path="/blog" element={<BlogArticles/>}/>
                <Route path="*" element={<PageError/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesFromMainMenu;