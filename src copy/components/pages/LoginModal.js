import {useRef} from 'react'
import SiteInfo from "../layout/SiteInfo";

const LoginModal=(props)=>{

    const urlInputRef = useRef();
    const userInputRef = useRef();
    const passwordInputRef = useRef();

    function submitHandler(){
        const enteredURL = urlInputRef.current.value;
        const enteredUser = userInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        SiteInfo.sitelink = "http://" + enteredURL;
        SiteInfo.username = enteredUser;
        SiteInfo.password = enteredPassword;

        props.onFinish();
    }

    return(
        <div className="modal">
            <form onSubmit={submitHandler}>
                <ul>
                    <li>
                        <label htmlFor='url'>URL</label>
                        <textarea id = 'url' required rows='1' ref={urlInputRef}/>
                    </li>
                    <li>
                        <label htmlFor='user'>Username</label>
                        <textarea id = 'user' required rows='1' ref={userInputRef}/>
                    </li>
                    <li>
                        <label htmlFor='password'>Password</label>
                        <textarea id = 'password' required rows='1' ref={passwordInputRef}/>
                    </li>
                    <li>
                        <button>Submit</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default LoginModal;