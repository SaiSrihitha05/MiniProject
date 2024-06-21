import React from 'react'
import AddUser from './AddUser'
import UserCount from './UserCount'
import UserList from './UserList'
import { useState } from 'react'
function Managetasks() {
  let [users,setUsers] = useState([])
  const handleDeleteUser=(index)=>{
    let dup = [...users]
    dup.splice(index,1)
    setUsers(dup)
  }
  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-md-3">
            <AddUser setUsers={setUsers} users={users}/>
          </div>
          <div className="col-md-3">
            <UserCount users={users}/>
          </div>
          <div className="col-md-6">
            <UserList users={users} onDelete={handleDeleteUser}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Managetasks