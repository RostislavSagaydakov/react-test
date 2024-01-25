import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import products from "./products/productList";
import singleProduct from "./products/singleProduct";
import categories from "./categories/categories";
import categoryProducts from "./categories/categoryProducts";
import blogList from "./blog/blog-list"
import user from "./user/user";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: products,
        product: singleProduct,
        categories: categories,
        categoryProducts: categoryProducts,
        blogList: blogList,
        user: user
    }
})