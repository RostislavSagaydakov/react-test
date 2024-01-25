import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/blog/blog-list";

export default function useBlogList() {
    const dispatch = useDispatch()
    const blogListItems = useSelector((state) => state.blogList)
    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const blogListUrl =
                    'https://api.slingacademy.com/v1/sample-data/blog-posts';
                const response = await fetch(blogListUrl);
                const data = await response.json();
                dispatch(success(data));
                // console.log(data)
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    }, []);
    return blogListItems;
}