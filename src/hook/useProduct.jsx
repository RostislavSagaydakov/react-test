import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/products/singleProduct";

export default function useProduct(id) {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const productListUrl = 'https://dummyjson.com/products/' + id;
                const response = await fetch(productListUrl);
                const data = await response.json();
                dispatch(success(data));
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    }, []);
    return product;
}