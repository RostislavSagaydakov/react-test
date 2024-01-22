import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
export default function PasswordField() {
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(faEyeSlash);
    const handleToggle = () => {
        if (type==='password'){
            setIcon(faEye);
            setType('text')
        } else {
            setIcon(faEyeSlash)
            setType('password')
        }
    }
    return (
        <div>
            <div>
                <div class="mb-4 flex">
                    <input
                        type={type}
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <span class="flex justify-around items-center" onClick={handleToggle}>
                        <FontAwesomeIcon class="absolute mr-10" icon={icon} size={25}/>
                    </span>
                </div>
            </div>
        </div>
    );
}