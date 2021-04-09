import React from 'react'
import '../styles/Login.css'
import { Button } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import login__picture from '../assets/login_picture.PNG'

const Login = () => {
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
                    <Button className="login__facebook">
                        <FacebookIcon />
                        Login with Facebook
                    </Button>
                </div>

                <div className="login__google login__option">
                    <img
                        src="http://pngimg.com/uploads/google/google_PNG19635.png"
                        alt=""
                    />
                    <Button className="login__google">Login with Google</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
