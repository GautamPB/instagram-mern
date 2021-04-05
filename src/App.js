import React from 'react'
import './App.css'
import Header from './components/Header'
import Story from './components/Story'
import PostComponent from './components/PostComponent'

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__body">
                <div className="app__leftBody">
                    <Story />
                    <PostComponent />
                </div>

                <div className="app__rightBody">
                    <h1>Right side</h1>
                </div>
            </div>
        </div>
    )
}

export default App
