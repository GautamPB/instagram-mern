import React from 'react'
import PostComponent from './PostComponent'
import UploadPost from './UploadPost'
import '../styles/Post.css'

const Post = () => {
    return (
        <div className="post">
            <div className="post__body">
                <PostComponent
                    profile="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview"
                    username="google"
                    image="https://code.org/shared/images/social-media/codeorg2020_social.png"
                    capiton="This is very cool"
                />
                <PostComponent
                    username="facebook"
                    image="https://inteng-storage.s3.amazonaws.com/img/iea/9lwjAVnM6E/sizes/ocde_resize_md.jpg"
                    profile="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                    capiton="This is very cool"
                />

                <PostComponent
                    username="facebook"
                    image="https://i.pinimg.com/originals/2f/37/5c/2f375cd801a906e5c3a57b3baced8ca1.gif"
                    profile="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                    capiton="This is very cool"
                />
            </div>

            <div className="post__input">
                <UploadPost className="uploadPost" />
            </div>
        </div>
    )
}

export default Post
