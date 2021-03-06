import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React,{useState} from 'react'
import './MessageSender.css'
import { useStateValue } from '../../../context/StateProvider/StateProvider';
import db from '../../../firebase/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

function MessageSender() {
    const [{user},] = useStateValue();

    const [input,setInput] = useState("");
    const [imageUrl, setimageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
            
        })

        
        setInput("")
        setimageUrl("")
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form action="">
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="messageSender__input"  
                        placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    
                    <input 
                        value={imageUrl}
                        onChange={e => setimageUrl(e.target.value)}
                        placeholder="image URL (Optional)"
                    />

                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>

        </div>
    )
}

export default MessageSender
