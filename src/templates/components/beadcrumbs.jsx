import {NavLink} from "react-router-dom";

export default function Breadcrumbs(props) {
    return(
        <>
            <nav className="breacrumbs">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/shop">All products</NavLink></li>
                    {props.categoryName && <li><NavLink to={'/shop/' + props.categoryName}>{props.categoryName}</NavLink></li>}
                    {props.product.title && <li>{props.product.title}</li>}
                </ul>
            </nav>
        </>
    )
}