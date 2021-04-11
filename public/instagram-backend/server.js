import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Pusher from 'pusher'
import dbModel from './dbModel.js'

// app config
const app = express()
const port = process.env.PORT || 8080

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

mongoose.connection.once('open', () => {
    console.log('dB is connected')
})

// API routes
app.get('/', (req, res) => res.status(200).send('Hello World'))

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
