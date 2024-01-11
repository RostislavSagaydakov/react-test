import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/products/productList";

export default function useProducts() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const productListUrl = 'https://dummyjson.com/products';
                const response = await fetch(productListUrl);
                const data = await response.json();
                dispatch(success(data.products));
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    }, []);
    return products;
}