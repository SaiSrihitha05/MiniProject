import React from 'react'

function UserCount(props) {
  return (
    <div className='container m-5'>
        <p className="display-4 text-center text-info">User Count</p>
        <p className="display-6 text-center">{props.users.length}</p>
    </div>
  )
}

export default UserCount