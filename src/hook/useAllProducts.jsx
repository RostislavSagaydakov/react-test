import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/products/productList";

export default function useAllProducts(categoryName, itemsPerPage, skip) {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const productListUrl =
                    'https://dummyjson.com/products' +
                    (categoryName !== undefined ? '/category/' + categoryName : '') +
                    `?limit=${itemsPerPage}` +
                    `&skip=${skip}`;
                const response = await fetch(productListUrl);
                const data = await response.json();
                dispatch(success(data));
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    }, [categoryName, itemsPerPage, skip]);
    return products;
}