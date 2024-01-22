import {useSelector, useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../../../redux/cart/reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

function Minicart(props) {
    const dispatch = useDispatch();
    const itemsList = useSelector(state => state.cart.itemsInCart);
    const items = [...new Set(itemsList)];
    const totalPrice = items.reduce((acc, element) => acc += element.price * element.quantity , 0)
    return (
        <div className="minicart fixed top-0 bottom-0 right-0 h-dvh overflow-auto w-64 bg-gray-200 border-s-4 border-indigo-500 p-4">
            <span
                onClick={props.openMinicart}
                className="p-1 block cursor-pointer hover:text-blue-600 ease-out duration-300">
                <FontAwesomeIcon icon={faTimes}/>
            </span>
            {totalPrice == 0 && <p>No items</p>}
            {(totalPrice > 0) && <div>
                <ul>
                    {items.map((addedItem, index) => (
                        <li key={index} className="grid grid-cols-4 grid-rows-2 gap-1">
                            <div className="row-span-2">
                                <img
                                    src={addedItem.thumbnail}
                                    alt={addedItem.title}
                                />
                            </div>
                            <div className="col-span-3 pr-10 relative">
                                <NavLink to={'/shop/' + addedItem.category + '/' + addedItem.id}>
                                    <strong>{addedItem.title}</strong>
                                </NavLink>
                                <button
                                    className="absolute right-0 top-0 bg-red-300 w-9 h-9 rounded-lg"
                                    onClick={()=>dispatch(deleteItemFromCart(addedItem.id))}
                                >
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                            <div className="col-span-3 col-start-2 row-start-2">
                                ${addedItem.price} x
                                {addedItem.quantity}
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="total">
                    ${totalPrice}
                </div>
                <NavLink to="/checkout/cart" onClick={props.openMinicart}>cart</NavLink>
                {/*<NavLink to="/checkout">checkout</NavLink>*/}
            </div>}
        </div>
    )
};
export default Minicart;