import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import actions
import { getallUser } from '../../../JS/actions/user'
//import components or icons
import All from '../../../components/admin/user/Users'

function Users() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.userReducer.loadUser)
    const users = useSelector(state => state.userReducer.users)

    useEffect(() => {
        dispatch(getallUser())
    }, [dispatch])
    console.log(users)

    return (
        <div className="admin_container">
            <div className="header_title">
                <h2>All Users</h2>
            </div>
            <All loading={loading} data={users} />
        </div>
    )
}

export default Users
