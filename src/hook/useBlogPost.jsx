import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/blog/blog-post";

export default function useBlogPost(blogId) {
    const dispatch = useDispatch()
    const blogPostItem = useSelector((state) => state.blogPost)
    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const blogPostUrl =`https://api.slingacademy.com/v1/sample-data/blog-posts/${blogId}`;
                const response = await fetch(blogPostUrl);
                const data = await response.json();
                dispatch(success(data));
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    },[]);
    return blogPostItem;
}