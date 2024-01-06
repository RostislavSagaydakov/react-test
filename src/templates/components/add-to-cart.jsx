import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, deleteItemFromCart} from "../../redux/cart/reducer"

function AddToCart(props) {
    const dispatch = useDispatch();
    const itemsList = useSelector(state => state.cart.itemsInCart);
    const itemIsAdded = itemsList.some(item => item.id === props.element.id)
    const handleAddItem = (event) => {
        event.stopPropagation();
        if (itemIsAdded) {
            dispatch(deleteItemFromCart(props.element.id));
        } else {
            dispatch(setItemInCart(props.element));
        }
    }

    return (
        <>
            <div className="add-to-card flex gap-4">
                <input type="number" className="w-20"/>
                <button
                    onClick={handleAddItem}
                    className={'hover:opacity-75 text-white font-bold py-2 px-4 rounded block w-full ' + (itemIsAdded ? 'bg-slate-500' : 'bg-blue-500')}>
                    {itemIsAdded ? 'Remove from cart' : 'Add to card'}
                </button>
            </div>
        </>
    )
}

export default AddToCart;