import {useSelector, useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../../../redux/cart/reducer";

function Minicart() {
    const dispatch = useDispatch();
    const itemsList = useSelector(state => state.cart.itemsInCart);
    const items = [...new Set(itemsList)];
    const totalPrice = items.reduce((acc, element) => acc += element.price , 0)
    console.log(items)
    return (
        <>
            <ul>
                {items.map((addedItem, index) => (
                    <li key={index}  className="grid grid-cols-4 grid-rows-2 gap-1">
                        <div className="row-span-2">
                            <img
                            src={addedItem.thumbnail}
                            alt={addedItem.title}
                            />
                        </div>
                        <div className="col-span-3">
                            <button onClick={()=>dispatch(deleteItemFromCart(addedItem.id))}>remove</button>
                            <strong>{addedItem.title}</strong>
                        </div>
                        <div className="col-span-3 col-start-2 row-start-2">{addedItem.price}</div>
                    </li>
                ))}
            </ul>
            <div className="total">
                ${totalPrice}
            </div>
        </>
    )
}
export default Minicart;