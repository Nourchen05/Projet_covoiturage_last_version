import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
//import actions
// import { toggleTrue } from '../../../js/actions/edit'
import {getUserId} from '../../../JS/actions/user'
//import components
import Delete from './delete/Delete'


function UsersDetails({ data }) {
    const [del, setDel] = useState(false)

    const handleDelete = (e) => {
        e.preventDefault()
        setDel(true)
    }
    return (
        <div className="news_details">
            <div className="table_details_content col_5">
                <p>{data.lastname}</p>
                <p>{data.firstname}</p>
                <p>{data.gender}</p>
                <p>{data.email}</p>
                <div className="action_button">
                    <button className="admin_btn btn_delete" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            {del ? <Delete setDel={setDel} dataId={data._id} /> : null}
        </div>
    )
}

export default UsersDetails
