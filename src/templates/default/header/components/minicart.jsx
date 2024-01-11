import {useSelector, useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../../../redux/cart/reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

function Minicart() {
    const dispatch = useDispatch();
    const itemsList = useSelector(state => state.cart.itemsInCart);
    const items = [...new Set(itemsList)];
    const totalPrice = items.reduce((acc, element) => acc += element.price , 0)
    return (
        <>
            <div>
                <ul>
                    {items.map((addedItem, index) => (
                        <li key={index}  className="grid grid-cols-4 grid-rows-2 gap-1">
                            <div className="row-span-2">
                                <img
                                    src={addedItem.thumbnail}
                                    alt={addedItem.title}
                                />
                            </div>
                            <div className="col-span-3 pr-10 relative">
                                <strong>{addedItem.title}</strong>
                                <button
                                    className="absolute right-0 top-0 bg-red-300 w-9 h-9 rounded-lg"
                                    onClick={()=>dispatch(deleteItemFromCart(addedItem.id))}
                                >
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                            <div className="col-span-3 col-start-2 row-start-2">{addedItem.price}</div>
                        </li>
                    ))}
                </ul>
                <div className="total">
                    ${totalPrice}
                </div>
                <NavLink to="/checkout/cart">cart</NavLink>
                <NavLink to="/checkout">checkout</NavLink>
            </div>
        </>
    )
};
export default Minicart;