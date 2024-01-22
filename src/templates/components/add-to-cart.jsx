import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";

function AddToCart(props) {
    const dispatch = useDispatch();
    const itemsList = useSelector((state) => state.cart.itemsInCart);
    const [quantity, setQuantity] = useState(1);

    const isItemInCart = itemsList.some((item) => item.id === props.element.id);

    const handleAddItem = (event) => {
        event.stopPropagation();
        // console.log(props.element)
        if (isItemInCart) {
            dispatch(deleteItemFromCart(props.element.id));
        } else {
            if (quantity < 1) {
                alert('Please use correct quantity')
                return false;
            }
            dispatch(setItemInCart({ ...props.element, quantity }));
        }
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10) || 1);
    };

    return (
        <>
            <div className="add-to-card flex gap-4">
                {!isItemInCart && (
                    <input
                        type="number"
                        className="w-20"
                        min="1"
                        value={quantity}
                        onInput={handleQuantityChange}
                    />
                )}
                <button
                    onClick={handleAddItem}
                    className={
                        "hover:opacity-75 text-white font-bold py-2 px-4 rounded block w-full " +
                        (isItemInCart ? "bg-slate-500" : "bg-blue-500")
                    }
                >
                    {isItemInCart ? "Remove from cart" : "Add to card"}
                </button>
            </div>
        </>
    );
}

export default AddToCart;
