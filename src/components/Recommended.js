import React from 'react'
import '../styles/Recommended.css'
import { Avatar } from '@material-ui/core'
import tick from '../assets/tick.png'

const Recommended = ({ profile, username, text, button_text, verified }) => {
    return (
        <div className="recommended">
            <div className="recommended__profile">
                <Avatar src={profile} />
            </div>
            <div className="recommended__details">
                <div className="recommended__username">
                    <h6>{username}</h6>
                    <img src={verified ? tick : ''} alt="" />
                </div>
                <p>{text}</p>
            </div>

            <div className="recommended__button">
                <button>{button_text}</button>
            </div>
        </div>
    )
}

export default Recommended
