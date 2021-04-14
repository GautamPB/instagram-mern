import React from 'react'
import PostComponent from './PostComponent'
import UploadPost from './UploadPost'
import '../styles/Post.css'

const Post = ({ posts }) => {
    return (
        <div className="post">
            <div className="post__body">
                {posts.map((post) => (
                    <PostComponent
                        username={post.user}
                        image={post.image}
                        profile={post.profile}
                        caption={post.caption}
                    />
                ))}
            </div>

            <div className="post__input">
                <UploadPost className="uploadPost" />
            </div>
        </div>
    )
}

export default Post
