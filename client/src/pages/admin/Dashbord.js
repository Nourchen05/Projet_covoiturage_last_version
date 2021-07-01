import React, { useEffect } from 'react'
import { BsFillPeopleFill,BsFillCursorFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import {getallRoads} from '../../JS/actions/road'
import './dash.css'

function Dashbord() {
    const dispatch = useDispatch()
    
    const loadUser = useSelector(state => state.userReducer.loadUser)
    const users = useSelector(state => state.userReducer.users)

    const loadRoad = useSelector(state => state.roadReducer.loadRoad)
    const roads = useSelector(state => state.roadReducer.roads)
    useEffect(() => {
        dispatch(getallRoads())
    }, [dispatch])
    return (
        <div className="admin_container">
            <h1>Welcome Admin</h1>
            <div className="dash_stat">
                <div className="stat_user">
                    <div>
                        <p style={{color:"white"}}>Ils existent {loadUser ? null : users.length} utiliseurs</p>
                    </div>
                    <BsFillPeopleFill  className="stat_icon"/>

                </div>
                <div className="stat_trajet">
                    <div>
                        <p style={{color:"white"}}>Il y a {loadRoad ? null : roads.length} trajets publiés</p>
                    </div>
                    <BsFillCursorFill className="stat_icon" />
                </div>


            </div>
        </div>
    )
}

export default Dashbord
