import {NavLink} from "react-router-dom";

function Banner(){
    return(
        <div className="grid grid-cols-2 gap-0 container-full">
            <div>
                <img src="https://picsum.photos/720/532?random=1"/>
            </div>
            <div className="flex items-center">
                <div className="container">
                    <p className="sub-heading">SALE UP TO 35% OFF</p>
                    <h2>HUNDREDS of New lower prices!</h2>
                    <p>It’s more affordable than ever to give every room in your home a stylish makeover</p>
                    <NavLink to="/shop/" className="link-more">Shop Now</NavLink>
                </div>
            </div>
        </div>
    )
}
export default Banner