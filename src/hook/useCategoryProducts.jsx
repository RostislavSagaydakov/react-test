import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/categories/categories";

export default function useCategoryProducts(categoryName) {
    const dispatch = useDispatch()
    const categoryProducts = useSelector((state) => state)

    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const url = 'https://dummyjson.com/products/category' + categoryName;
                const response = await fetch(url);
                const data = await response.json();
                dispatch(success(data));
                console.log(data)
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    }, []);
    return categoryProducts;
}