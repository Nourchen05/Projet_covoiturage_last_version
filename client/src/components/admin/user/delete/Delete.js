import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteUser} from '../../../../JS/actions/user'

function Delete({setDel,dataId}) {
    const dispatch = useDispatch()
    return (
        <div className="delete">
            <div className="delete_content">
                <p>Are u sure you want to delete ? </p>
                <div className="action">
                <button className="admin_btn btn_delete" onClick={(e)=> {e.preventDefault();dispatch(deleteUser(dataId))}}>Delete</button>
                <button className="admin_btn btn_update" onClick={()=> setDel(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Delete
