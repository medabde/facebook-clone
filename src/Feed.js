import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            <Post
                profilePic=''
                message='hello'
                timestamp="this is a timestamp"
                username="moha"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCC19Y7E34QpbIn5q8f7JONuIjaVNbwHqMg&usqp=CAU"
            />
            <Post
                profilePic=''
                message='hello'
                timestamp="this is a timestamp"
                username="moha"
                image=""
            />
        </div>
    )
}

export default Feed
