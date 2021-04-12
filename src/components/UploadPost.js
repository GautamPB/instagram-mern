import React, { useState } from 'react'
import '../styles/UploadPost.css'

const UploadPost = () => {
    const [imageURL, setImageURL] = useState('')
    const [caption, setCaption] = useState('')

    const handlePost = (e) => {
        e.preventDefault()
        console.log(imageURL)
        console.log(caption)
        setImageURL('')
        setCaption('')
    }

    return (
        <div className="uploadPost">
            <h3>Post New Image</h3>
            <form>
                <input
                    value={imageURL}
                    onChange={(e) => setImageURL(e.target.value)}
                    className="uploadPost__image"
                    type="text"
                    placeholder="Image URL"
                />

                <input
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="uploadPost__caption"
                    type="text"
                    placeholder="Comment"
                />

                <button type="submit" onClick={handlePost}>
                    Post
                </button>
            </form>
        </div>
    )
}

export default UploadPost
