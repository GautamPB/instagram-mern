import React from 'react'
import '../styles/Story.css'
import StoryComponent from './StoryComponent'

const Story = () => {
    return (
        <div className="story">
            <StoryComponent
                image="https://assets.materialup.com/uploads/82eae29e-33b7-4ff7-be10-df432402b2b6/preview"
                name="google"
            />

            <StoryComponent
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                name="facebook"
            />

            <StoryComponent
                image="https://cdn-0.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png"
                name="apple"
            />

            <StoryComponent
                image="https://www.eecmyanmar.com/wp-content/uploads/2018/03/Microsoft-Logo-icon-png-Transparent-Background.png"
                name="microsoft"
            />

            <StoryComponent
                image="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg"
                name="amazon"
            />

            <StoryComponent
                image="https://www.logocentral.info/wp-content/uploads/2020/04/Tesla-Logo-640X590.jpg"
                name="teslamotors"
            />

            <StoryComponent
                image="https://cdn57.androidauthority.net/wp-content/uploads/2020/03/oneplus-logo-before-march-2020.jpg"
                name="oneplus"
            />

            <StoryComponent
                image="http://www.comicvault.ie/uploads/9/5/1/1/9511907/s474552655795547315_c161_i1_w600.jpeg"
                name="marvel"
            />

            <StoryComponent
                image="data:image/png;base64,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"
                name="linustech"
            />

            <StoryComponent
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRN_dFyM31J9EfBZbvf9HllXPOt06docGwPTAfnzvXGclZCzhagUvULDUhhKPmRCCoEw&usqp=CAU"
                name="mkbhd"
            />
        </div>
    )
}

export default Story
