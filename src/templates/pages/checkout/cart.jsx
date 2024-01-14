import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromCart} from "../../../redux/cart/reducer";

function Cart() {
    const addedItems = useSelector(state => state.cart.itemsInCart);
    const dispatch = useDispatch();

    return (
        <>
            {addedItems.map(item => {
                return (
                    <div key={item.id}>
                        <img src={item.thumbnail} alt={item.description}/>
                        <h2>{item.title}</h2>
                        <h3>{item.price}</h3>

                        <button
                            onClick={() => dispatch(deleteItemFromCart(item.id))} // TODO refactor
                            className='hover:opacity-75 text-white font-bold py-2 px-4 rounded block w-full bg-slate-500'>
                            Remove from cart
                        </button>
                    </div>
                )
            })}
        </>
    )
}

export default Cart;