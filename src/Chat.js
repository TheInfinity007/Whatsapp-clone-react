import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

import './Chat.css';
import db from './firebase';

function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        console.log('roomName', roomName);
    }, [roomName]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('input', input);
        setInput('');
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${false && 'chat__receiver'}`}>
                    <span className="chat__name">Yash</span>
                    Hey Guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">The Infinity</span>
                    Hi Guys
                    <span className="chat__timestamp">3:53pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        type="text"
                        placeholder="Type a message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit" onClick={sendMessage}>
                        Send Message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}

export default Chat;
