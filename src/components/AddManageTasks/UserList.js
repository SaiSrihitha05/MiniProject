
function TasksList({users,onDelete}) {
  function handleDeleteUser(index){
      onDelete(index)
  }
  return (
    <div className="m-5">
         <p className="display-6 text-center">List of Tasks</p>
         <table className='table'>
                <thead>
                    <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {users &&
                users.map((user,index)=>
                <tr key={index}>
                    <td>{user.newUser}</td>
                    <td>{user.email}</td>
                    <td><button className="btn btn-danger fs-6" onClick={()=>handleDeleteUser(index)}> {'x'}</button></td>
                </tr>
                )
            }
                    
                </tbody>
            </table>
            
        
    </div>
  )
}
export default TasksList