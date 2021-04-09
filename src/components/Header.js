import React from 'react'
import '../styles/Header.css'
import HomeIcon from '@material-ui/icons/Home'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import SearchIcon from '@material-ui/icons/Search'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { IconButton, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

const Header = () => {
    const [{ user }] = useStateValue()

    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <img
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""
                    />
                </Link>
            </div>

            <div className="header__center">
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>

            <div className="header__right">
                <Link to="/">
                    <IconButton className="header__icon">
                        <HomeIcon />
                    </IconButton>
                </Link>

                <IconButton className="header__icon">
                    <ChatBubbleIcon />
                </IconButton>

                <IconButton className="header__icon">
                    <SearchIcon />
                </IconButton>

                <IconButton className="header__icon">
                    <FavoriteBorderIcon />
                </IconButton>

                <Link to="/login">
                    <Avatar
                        src={user ? user.photoURL : ''}
                        className="header__avatar"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Header
