import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {useDispatch} from "react-redux";
// import useUser from "../../../../hook/useUser";
import { success, fail, pending } from "../../../../redux/user/user";

// import PasswordField from "../../../components/form/password";
function AccountModalContent(props) {
    const dispatch = useDispatch()
    const [showSignUp, setShowSignUp] = useState(false);
    const showAccountModal = (event)=> {
        event.preventDefault();
        setShowSignUp(showSignUp => !showSignUp)
    }
    const [username, setUsername] = useState('kminchelle');
    const [password, setPassword] = useState('0lelplR');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const fetchUsers = async () => {
            dispatch(pending())
            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        // expiresInMins: 60, // optional
                    })
                });

                const dataAuth = await response.json();
                const responseMe = await fetch('https://dummyjson.com/user/me', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${dataAuth.token}`,
                    },
                })
                const dataMe = await responseMe.json();
                dispatch(success({auth: dataAuth, ...dataMe}));
                navigate('/account')
            } catch (error) {
                dispatch(fail(error));
                console.error('Error fetching users:', error);
            }
            props.closeModal()
        };
        fetchUsers();
    };
    return (
        <div className="grid grid-cols-2 gap-4 items-center h-full overflow-auto h-full mr">
            <div className="modal_account-image relative h-full overflow-hidden">
                <LazyLoadImage
                    effect="blur"
                    className="absolute object-cover h-full w-full object-center"
                    src="https://picsum.photos/736/1080"
                />
            </div>
            {showSignUp && <form action="#" className="modal_account-form" id="modal-signin" onSubmit={handleLogin}>
                <h2 className="title">Sign in</h2>
                <p>Dont have an account? <span className="underline cursor-pointer" onClick={showAccountModal}>Sign Up</span></p>
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded my-2 dark:bg-gray-700"/>
                <fieldset>
                    <div className="field">
                        <input type="text" value={username} onInput={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="field">
                        <input type="password" value={password} onInput={(e) => setPassword(e.target.value)} />
                    </div>
                    <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded my-2 dark:bg-gray-700"/>
                    <div className="actions">
                        <div className="remember">
                            <input type="checkbox" id="modal-rememder" name="modal-rememder"/>
                            <label htmlFor="modal-rememder">Remember me</label>
                        </div>
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded my-2 dark:bg-gray-700"/>
                        <button>Sign In</button>
                    </div>
                </fieldset>
            </form>}
            {!showSignUp && <form action="#" className="modal_account-form" id="modal-signup">
                <h2 className="title">Sign up</h2>
                <p>Already have an account? <span className="underline cursor-pointer" onClick={showAccountModal}>Sign in</span></p>
                <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded my-2 dark:bg-gray-700"/>
                <fieldset>
                    <div className="field">
                        <input type="text" placeholder="Your name" id="name-signup"/>
                    </div>
                    <div className="field">
                        <input type="text" id="username-signup" placeholder="Username"/>
                    </div>
                    <div className="field">
                        <input type="text" id="email-signup" placeholder="Email address"/>
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Password" id="password-signup"/>
                    </div>
                    <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded my-2 dark:bg-gray-700"/>
                    <div className="actions">
                        <div className="agree">
                            <input type="checkbox" id="modal-agree" name="modal-agree"/>
                            <label htmlFor="modal-agree">
                                I agree with
                                <a href="/">Privacy Policy</a>
                                and
                                <a href="/">Terms of Use</a>
                            </label>
                        </div>
                        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded my-2 dark:bg-gray-700"/>
                        <button>Sign Up</button>
                    </div>
                </fieldset>
            </form>}
        </div>
    )
}
export default AccountModalContent;