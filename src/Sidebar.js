import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import './Sidebar.css';
import SidebarChat from './SidebarChat';
import db from './firebase';

function Sidebar() {
    const [rooms, setRooms] = useState([]);

    // useEffect(() => {
    //     let roomsCollection = db.collection('rooms');
    //     console.log('roomsCollection', roomsCollection);

    //     const roomsSnapshots = db.collection('rooms').onSnapshot((snapshot) => {
    //         console.log('querySnapshot', snapshot);
    //         console.log('querySnapshot.docs', snapshot.docs);
    //         snapshot.docs.forEach((doc) => {
    //             console.log('doc', doc.id, doc.data());
    //         });
    //     });
    // }, []);

    useEffect(() => {
        console.log('Rooms', rooms);
    }, [rooms]);

    useEffect(() => {
        db.collection('rooms').onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat={true} />
                {rooms.map((room) => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
