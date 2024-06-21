import React from 'react'

function UserCount(props) {
    
  return (
    <div>
        <p className="display-6 text-primary">The count is {props.count}</p>
    </div>
  )
}

export default UserCount