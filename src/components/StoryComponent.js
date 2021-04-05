import React from 'react'
import '../styles/StoryComponent.css'

const StoryComponent = ({ image, name }) => {
    return (
        <div className="storyComponent">
            <div className="storyComponent__photo">
                <div className="storyComponent__image">
                    <img src={image} alt="" />
                </div>
            </div>

            <p>{name}</p>
        </div>
    )
}

export default StoryComponent
