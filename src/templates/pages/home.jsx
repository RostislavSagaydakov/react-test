import HeroSlider from './../components/hero-slider'
import BannerGrid from './../components/banner-grid'
import ProductSlider from './../components/product-slider'
import BannerValues from "../components/banner-values";
import Banner from "../components/banner";
import BlogArticlesList from "../components/blog-articles-list";

function PageHome() {
    return(
        <>
            <HeroSlider/>
            <BannerGrid/>
            <ProductSlider/>
            <BannerValues/>
            <Banner/>
            <BlogArticlesList/>
        </>
    )
}
export default PageHome;