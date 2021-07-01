import React from 'react'
import { BsViewStacked, BsBoxArrowInRight } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import {logout} from '../../../JS/actions/user'
import './navbar.css'

function Navbar({ setSidebar, sidebar }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <div className="admin_navbar">
            <div className="admin_left_bar">
                <BsViewStacked onClick={handleSidebar} style={{cursor:"pointer"}} />
                <p >Welcome Admin !</p>
            </div>
            <div className="admin_right_bar" onClick={()=> {dispatch(logout()); history.push("/")}}>
                <p>logout</p>
                <BsBoxArrowInRight />
            </div>
        </div>
    )
}

export default Navbar
