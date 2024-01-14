import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/categories/categories";

export default function useCategories() {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state)

    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const url = 'https://dummyjson.com/products/categories';
                const response = await fetch(url);
                const data = await response.json();
                dispatch(success(data));
                // console.log(data)
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    }, []);
    return categories;
}