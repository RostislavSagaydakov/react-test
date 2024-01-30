import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/products/productList";
import usePrevious from "./usePrevious";

export default function useAllProducts(categoryName, itemsPerPage, skip, setSkip = 0) {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const prevCategoryName = usePrevious(categoryName);
    useEffect(() => {
        if(prevCategoryName !== categoryName) {
            setSkip(0);
        }
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