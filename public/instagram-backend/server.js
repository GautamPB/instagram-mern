import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import dbModel from './dbModel.js'

// app config
const app = express()
const port = process.env.PORT || 8080

const pusher = new Pusher({
    appId: '1186605',
    key: 'b719ded298a39cd4c450',
    secret: 'df2a7afa12e27ccf38bb',
    cluster: 'eu',
    useTLS: true,
})

//middleware
app.use(express.json())
app.use(cors())

//dB config
const connectionURL =
    'mongodb+srv://amdin:5iv6AxvqthSy4tYZ@cluster0.p2hes.mongodb.net/instagramDB?retryWrites=true&w=majority'
mongoose.connect(connectionURL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', () => {
    console.log('dB is connected')
    const postCollection = db.collection('posts')
    const changeStream = postCollection.watch()

    changeStream.on('change', (change) => {
        console.log(change)
        if (change.operationType === 'insert') {
            const postDetails = change.fullDocument
            pusher.trigger('posts', 'inserted', {
                name: postDetails.user,
                image: postDetails.image,
                caption: postDetails.caption,
            })
        } else {
            console.log('Error triggering pusher.')
        }
    })
})

// API routes
app.get('/', (req, res) => res.status(200).send('Instagram Clone'))

app.post('/upload', (req, res) => {
    const body = req.body
    dbModel.create(body, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/sync', (req, res) => {
    dbModel.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))
