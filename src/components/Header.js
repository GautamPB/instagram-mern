import React from 'react'
import '../styles/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import SearchIcon from '@material-ui/icons/Search'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { IconButton, Avatar } from '@material-ui/core'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                    alt=""
                />
            </div>

            <div className="header__center">
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>

            <div className="header__right">
                <IconButton className="header__icon">
                    <HomeIcon />
                </IconButton>

                <IconButton className="header__icon">
                    <ChatBubbleIcon />
                </IconButton>

                <IconButton className="header__icon">
                    <SearchIcon />
                </IconButton>

                <IconButton className="header__icon">
                    <FavoriteBorderIcon />
                </IconButton>

                <Avatar className="header__avatar" />
            </div>
        </div>
    )
}

export default Header
