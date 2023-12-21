import React from "react";
function AccountModalContent() {
    return (
        <div className="grid grid-cols-2 gap-4 items-center">
            <div>image</div>
            <form action="#">
                <h2 className="title">Sign in</h2>
                <p>Dont have an account? <a href="#">Sign up</a></p>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Your password</label>
                        <input type="password" id="password"/>
                    </div>
                    <div className="actions">
                        <button>Sign In</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
export default AccountModalContent;