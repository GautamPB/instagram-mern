import React from 'react'
import '../styles/PostComponent.css'
import MenuIcon from '@material-ui/icons/Menu'
import { Avatar } from '@material-ui/core'

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
            </div>
        </div>
    )
}

export default PostComponent
