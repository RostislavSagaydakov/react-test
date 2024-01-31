import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/header/search";

export default function useTopSearch(query,limit, queryLength = 3) {
    const dispatch = useDispatch()
    const searchProducts = useSelector((state) => state.topSearch)
    useEffect(() => {
        dispatch(pending());
        if(queryLength < query.length) {
            try {
                (async () => {
                    const topSearchUrl =
                        'https://dummyjson.com/products/search?q=' + query +
                        '&limit=' + limit;
                    const response = await fetch(topSearchUrl);
                    const data = await response.json();
                    dispatch(success(data));
                })();
            } catch(error) {
                dispatch(fail(error))
            }
        }
    }, [query]);
    return searchProducts;
}