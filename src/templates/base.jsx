import BaseFooter from "./default/footer";
import BaseMain from "./default/main";
import {useDispatch} from "react-redux";
import {authFromLocalStorage} from "../redux/user/user";

function BaseLayout() {

    const dispatch = useDispatch()
    dispatch(authFromLocalStorage())
    return (
        <>
            <BaseMain/>
            <BaseFooter/>
        </>
    )
}

export default BaseLayout;