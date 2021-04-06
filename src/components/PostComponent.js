import React from 'react'
import '../styles/PostComponent.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import SendIcon from '@material-ui/icons/Send'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

const PostComponent = ({ profile, name, image }) => {
    return (
        <div className="postComponent">
            <div className="postComponent__top">
                <div className="postComponent__topLeft">
                    <Avatar src={profile} />
                    <h4>{name}</h4>
                </div>

                <div className="postComponent__topRight">
                    <MenuIcon />
                </div>
            </div>

            <div className="post__body">
                <div className="post__bodyImage">
                    <img src={image} alt="" />
                </div>

                <div className="post__footer">
                    <div className="post__footerLeft">
                        <FavoriteBorderIcon />
                        <ChatBubbleOutlineIcon />
                        <SendIcon />
                    </div>
                    <div className="post__footerRight">
                        <BookmarkBorderIcon />
                    </div>
                </div>
            </div>

            <div className="post__comment">
                <InsertEmoticonIcon />
                <input type="text" placeholder="Add a comment..." />
            </div>
        </div>
    )
}

export default PostComponent
