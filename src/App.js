import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Story from './components/Story'
import Post from './components/Post'
import Login from './components/Login'

function App() {
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
                                <Post />
                            </div>

                            <div className="app__rightBody">
                                <h1>Right side</h1>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
