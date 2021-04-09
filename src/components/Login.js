import React from 'react'
import '../styles/Login.css'
import login__picture from '../assets/login_picture.PNG'

const Login = () => {
    return (
        <div className="login">
            <div className="login__body">
                <div className="login__picture">
                    <img src={login__picture} alt="" />
                </div>

                <div className="login__details">
                    <img
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
