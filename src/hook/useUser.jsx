import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {pending, success, fail} from "../redux/user/user";

export default function useUser() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(pending());
        try {
            (async () => {
                const userListUrl =
                    'https://dummyjson.com/users';
                const responseAuth = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: 'kminchelle',
                        password: '0lelplR',
                        // expiresInMins: 60, // optional
                    })
                });
                const dataAuth = await responseAuth.json();
                const responseMe = await fetch('https://dummyjson.com/user/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${dataAuth.token}`,
                    },
                })
                const dataMe = await responseMe.json();
                dispatch(success({auth: dataAuth, ...dataMe}));
                // console.log(data)
            })();
        } catch(error) {
            dispatch(fail(error))
        }
    }, []);
    return user;
}