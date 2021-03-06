import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Story from './components/Story'
import Post from './components/Post'
import Login from './components/Login'
import Recommended from './components/Recommended'
import { useStateValue } from './StateProvider'
import Pusher from 'pusher-js'
import axios from './axios'

const App = () => {
    const [{ user }] = useStateValue()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // to fetch from API Routes
        axios.get('/sync').then((response) => {
            console.log(response.data)
            setPosts(response.data)
        })
    }, [])

    console.log(posts)

    useEffect(() => {
        const pusher = new Pusher('b719ded298a39cd4c450', {
            cluster: 'eu',
        })

        const channel = pusher.subscribe('posts')
        channel.bind('inserted', function (data) {
            // alert(JSON.stringify(data))
            setPosts([...posts, data])
        })

        return () => {
            channel.unbind_all()
            channel.unsubscribe()
        }
    }, [posts])

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Header />
                        <Login />
                    </Route>

                    <Route path="/">
                        <Header />
                        <div className="app__body">
                            <div className="app__leftBody">
                                <Story />
                                <Post posts={posts} />
                            </div>

                            <div className="app__rightBody">
                                <div className="app__rightBodyUser">
                                    <Recommended
                                        profile={user ? user.photoURL : ''}
                                        username={
                                            user ? user.displayName : 'Login'
                                        }
                                        text=""
                                        button_text={user ? 'Switch' : 'Login'}
                                        verified={false}
                                    />
                                </div>

                                <div className="app__rightBodySuggestions">
                                    <h4>Suggestions For You</h4>
                                    <Recommended
                                        profile="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                                        username="sundarpichai"
                                        text="followed by many"
                                        button_text="Follow"
                                        verified={true}
                                    />

                                    <Recommended
                                        profile="data:image/jpeg;base64,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"
                                        username="zuck"
                                        text="followed by many"
                                        button_text="Follow"
                                        verified={true}
                                    />

                                    <Recommended
                                        profile="https://www.thesoftwarereport.com/wp-content/uploads/2020/10/Apple-CEO-Tim-Cook.jpg"
                                        username="timcook"
                                        text="followed by many"
                                        button_text="Follow"
                                        verified={true}
                                    />

                                    <Recommended
                                        profile="https://img.etimg.com/thumb/width-640,height-480,imgsize-228069,resizemode-1,msid-61020784/magazines/panache/3-lessons-that-satya-nadella-took-from-the-cricket-field-to-the-ceos-office/satya-nadella2_bccl.jpg"
                                        username="satyanadella"
                                        text="followed by many"
                                        button_text="Follow"
                                        verified={true}
                                    />

                                    <Recommended
                                        profile="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
                                        username="jeffbezos"
                                        text="followed by many"
                                        button_text="Follow"
                                        verified={true}
                                    />

                                    <Recommended
                                        profile="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
                                        username="elonmusk"
                                        text="followed by many"
                                        button_text="Follow"
                                        verified={true}
                                    />

                                    <Recommended
                                        profile="https://pbs.twimg.com/profile_images/1001872245076115457/uR7K8vlI_400x400.jpg"
                                        username="petelau"
                                        text="followed by many"
                                        button_text="Follow"
                                        verified={true}
                                    />

                                    <Recommended
                                        profile="https://www.plymouth.edu/theclock/wp-content/uploads/sites/183/2019/03/stan-lee.png"
                                        username="therealstanlee"
                                        text="followed by many"
                                        button_text="Follow"
                                        verified={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
