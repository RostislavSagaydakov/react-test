import React from "react";
function AccountModalContent() {
    return (
        <div className="grid grid-cols-2 gap-4 items-center">
            <div>
                <img src="https://picsum.photos/736/1080/?blur" alt=""/>
            </div>
            <form action="#" id="modal-signin">
                <h2 className="title">Sign in</h2>
                <p>Dont have an account? <a href="#">Sign up</a></p>
                <fieldset>
                    <div className="field">
                        <input type="text" id="name"/>
                    </div>
                    <div className="field">
                        <input type="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="actions">
                        <div className="remember">
                            <input type="checkbox" id="modal-rememder" name="modal-rememder"/>
                            <label htmlFor="modal-rememder">Remember me</label>
                        </div>
                        <button>Sign InDont have an account?</button>
                    </div>
                </fieldset>
            </form>
            <form action="#" id="modal-signup">
                <h2 className="title">Sign up</h2>
                <p>Already have an account? <a href="#">Sign in</a></p>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name-signup">Your name</label>
                        <input type="text" id="name-signup"/>
                    </div>
                    <div className="field">
                        <input type="text" id="username" placeholder="Username"/>
                    </div>
                    <div className="field">
                        <input type="text" id="email" placeholder="Email address"/>
                    </div>
                    <div className="field">
                        <input type="password" id="password-signup"/>
                    </div>
                    <div className="actions">
                        <div className="agree">
                            <input type="checkbox" id="modal-agree" name="modal-agree"/>
                            <label htmlFor="modal-agree">I agree with <a href="#">Privacy Policy</a> and <a
                                href="#">Terms of Use</a></label>
                        </div>
                        <button>Sign Up</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default AccountModalContent;