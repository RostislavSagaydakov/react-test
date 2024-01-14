import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import products from "./products/productList";
import singleProduct from "./products/singleProduct";
import categories from "./categories/categories";
import categoryProducts from "./categories/categoryProducts";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: products,
        product: singleProduct,
        categories: categories,
        categoryProducts: categoryProducts
    }
})