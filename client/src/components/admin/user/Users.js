import React from 'react'
import Details from './UsersDetails'

function Users({loading,data}) {
    return (
        <div>
            <div className="table_header col_5">
                <h4>Nom</h4>
                <h4>Prénom</h4>
                <h4>Genre</h4>
                <h4>Email</h4>
                <h4>Actions</h4>
            </div>
            {loading ? null :
                data.length === 0 ? <div className="no_data"> There is no data .</div> :
                    data.map(el => <Details key={el._id} data={el} />)

            }
        </div>
    )
}

export default Users
