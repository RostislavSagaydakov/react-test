import {NavLink} from "react-router-dom";

export default function Breadcrumbs(props) {
    return(
        <>
            <nav className="breadcrumbs flex py-5" aria-label="Breadcrumb">
                <ul className="inline-flex space-x-1 md:space-x-2">
                    <li className="inline-flex items-center">
                        <NavLink
                            className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white hover:text-blue-600 "
                            to="/">
                            <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                            </svg>
                            Home
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 9 4-4-4-4"/>
                        </svg>
                        <NavLink to="/shop"
                                 className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">All products</NavLink>
                    </li>
                    {props.categoryName && <li className="flex items-center">
                        <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m1 9 4-4-4-4"/>
                        </svg>
                        <NavLink to={'/shop/' + props.categoryName}
                                 className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{props.categoryName}</NavLink>
                    </li>}
                    {props.product.title && <li className="flex items-center">
                        {props.product.title}
                    </li>}
                </ul>
            </nav>
        </>
    )
}

