import React from 'react'
import PostComponent from './PostComponent'
import '../styles/Post.css'

const Post = () => {
    return (
        <div className="post">
            <PostComponent
                profile="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview"
                name="google"
                image="https://code.org/shared/images/social-media/codeorg2020_social.png"
            />
            {/* <PostComponent /> */}
        </div>
    )
}

export default Post
