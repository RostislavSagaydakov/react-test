import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faPiggyBank, faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
function BannerValues() {
    return(
        <>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <FontAwesomeIcon icon={faTruck} />
                    <h2>Free Shipping</h2>
                    <span>Order above $200</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPiggyBank} />
                    <h2>Money-back</h2>
                    <span>30 days guarantee</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLock} />
                    <h2>Secure Payments</h2>
                    <span>Secured by Stripe</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <h2>24/7 Support</h2>
                    <span>Phone and Email support</span>
                </div>
            </div>
        </>
    )
}
export default BannerValues;