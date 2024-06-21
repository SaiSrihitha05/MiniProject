import React from 'react';

function UsersList({ users }) {
  return (
    <div>
        <h2 className='text-success text-center m-5'>List of Users</h2>
        <div >
            <table className='table'>
                <thead>
                    <tr>
                    <th>User Name</th>
                    <th>Date of Birth</th>
                    <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user,index)=>(
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.dob}</td>
                            <td>{user.city}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default UsersList;
