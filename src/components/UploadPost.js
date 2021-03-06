import React, { useState, useEffect } from 'react'
import '../styles/UploadPost.css'
import { useStateValue } from '../StateProvider'
import axios from '../axios'

const UploadPost = () => {
    const [imageURL, setImageURL] = useState('')
    const [caption, setCaption] = useState('')

    const [{ user }] = useStateValue()

    const handlePost = async (e) => {
        e.preventDefault()
        await axios.post('/upload', {
            user: user.displayName,
            caption: caption,
            image: imageURL,
            profile: user.photoURL,
        })
        setImageURL('')
        setCaption('')
    }

    useEffect(() => {
        const component = document.querySelector('.uploadPost')
        if (!user) {
            component.classList.add('hidden')
        } else {
            component.classList.remove('hidden')
        }
    })

    return (
        <div className="uploadPost hidden">
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
                    placeholder="Caption"
                />

                <button type="submit" onClick={handlePost}>
                    Post
                </button>
            </form>
        </div>
    )
}

export default UploadPost
