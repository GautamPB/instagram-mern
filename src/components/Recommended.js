import React from 'react'
import '../styles/Recommended.css'
import { Avatar } from '@material-ui/core'

const Recommended = ({ profile, username, text, button_text }) => {
    return (
        <div className="recommended">
            <div className="recommended__profile">
                <Avatar src={profile} />
            </div>
            <div className="recommended__details">
                <h6>{username}</h6>
                <p>{text}</p>
            </div>

            <div className="recommended__button">
                <button>{button_text}</button>
            </div>
        </div>
    )
}

export default Recommended
