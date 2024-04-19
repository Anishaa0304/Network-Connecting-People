import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#
                { topic}
            </span>
            
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://images.unsplash.com/photo-1491071676596-825e11fccef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.email[0] }</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{ user.email}</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed u</p>
                    <p className="sidebar__statNumber">2,533</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('developer')}
                {recentItem('opensource')}
                {recentItem('Jobs')}
                {recentItem('community')}
                <br></br>
                <p>Groups</p>
                <h5>&nbsp;&nbsp;&nbsp;[Admin]Web Dev &nbsp;&nbsp;&nbsp;community</h5><br></br>
                <h5>&nbsp;&nbsp;&nbsp;OpenSource projects</h5><br></br>
                <h5>&nbsp;&nbsp;&nbsp;GSOC Developers</h5>
                

                

            </div>
        </div>
    )
}

export default Sidebar
