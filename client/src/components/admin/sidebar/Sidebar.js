import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// BsFillAwardFill, BsFillFlagFill,BsFillHouseDoorFill, BsFillExclamationCircleFill,
import {
    BsFillInboxesFill, BsFillBriefcaseFill, 
} from "react-icons/bs";
import './sidebar.css'

function Sidebar() {
    const history = useHistory()
    const [project, setProject] = useState(true)
    const handleProject = () => {
        history.push('/dashbord/users')
    }
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3 style={{color:"white"}}>Cocar</h3>
            </div>
            <div className="sidebar_contents">
                <div className="admin_link" onClick={() => history.push('/dashbord')}>
                    <BsFillInboxesFill className="admin_link_icon" />Dashbord
                    </div>
                <div onClick={handleProject} className={project ? "admin_link" : "admin_link_clicked"}>
                    <BsFillBriefcaseFill className="admin_link_icon" />users
                    </div>
            </div>
        </div>
    )
}

export default Sidebar
