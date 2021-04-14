import mongoose from 'mongoose'

const instance = mongoose.Schema({
    caption: String,
    user: String,
    image: String,
    // comments: [],
    profile: String,
})

export default mongoose.model('posts', instance)
