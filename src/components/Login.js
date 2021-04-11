import React from 'react'
import '../styles/Login.css'
import { Button } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import login__picture from '../assets/login_picture.PNG'
import { auth, provider, facebookProvider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { useHistory } from 'react-router-dom'
import { actionTypes } from '../reducer'

const Login = () => {
    const [, dispatch] = useStateValue()

    const history = useHistory()

    const handleGoogleLogin = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log(result.user)
                const credential = result.credential
                const accessToken = credential.accessToken
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                history.push('/')
                console.log(accessToken)
            })
            .catch((error) => {
                alert(error)
            })
    }

    const handleFacebookLogin = () => {
        auth.signInWithPopup(facebookProvider)
            .then((result) => {
                console.log(result.user)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                history.push('/')
            })
            .catch((error) => {
                alert(error)
            })
    }

    return (
        <div className="login">
            <div className="login__picture">
                <img
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </div>

            <div className="login__phone">
                <img src={login__picture} alt="" />
            </div>

            <div className="login__options">
                <div className="login__facebook login__option">
                    <Button
                        className="login__facebook"
                        onClick={handleFacebookLogin}
                    >
                        <FacebookIcon />
                        Login with Facebook
                    </Button>
                </div>

                <div className="login__google login__option">
                    <img
                        src="http://pngimg.com/uploads/google/google_PNG19635.png"
                        alt=""
                    />
                    <Button
                        onClick={handleGoogleLogin}
                        className="login__google"
                    >
                        Login with Google
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login
