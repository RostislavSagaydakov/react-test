import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";

function AddToCart(props) {
    const dispatch = useDispatch();
    const itemsList = useSelector((state) => state.cart.itemsInCart);
    const [quantity, setQuantity] = useState(1);
    const [showMessage, setShowMessage] = useState(false);
    const [productMsg, setProductMsg] = useState("");

    const isItemInCart = itemsList.some((item) => item.id === props.element.id);

    const handleAddItem = (event) => {
        event.stopPropagation();
        const productName = props.element.title
        if (isItemInCart) {
            dispatch(deleteItemFromCart(props.element.id));
            setShowMessage(true);
            setProductMsg(productName + ' removed from cart');
        } else {
            if (quantity < 1) {
                alert('Please use correct quantity')
                return false;
            }
            dispatch(setItemInCart({ ...props.element, quantity }));
            setShowMessage(true);
            setProductMsg(productName + ' added to cart');
        }
    };
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10) || 1);
    };
    useEffect(() => {
        let timer;
        if (showMessage) {
            timer = setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [showMessage]);
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
            {showMessage && (
                <div>{productMsg}</div>
            )}

        </>
    );
}

export default AddToCart;
