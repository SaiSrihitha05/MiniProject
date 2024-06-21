import React, { useState, useEffect } from "react";
import './Assignment7.css';
function Assignment7() {
  let [users, setUsers] = useState([]);
  let [count,setCount]=useState(0)
  function userCount() {
      setCount(count + 1);
    }
  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  

  return (
    <div>
    <p className='text-center lead fs-1 text-info'>The User Count is {count}</p>
    <div className="container d-flex justify-content-around">
        <div className="row row-cols-4 g-2">
          {users.map((user) => (
            <div key={user.id} className="card text-center p-2">
              <p className="display-6 text-center text-primary">{user.name}</p>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p>{user.address.city}</p>
              <button onClick={userCount} className="btn btn-success w-33 mx-auto">Add User</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assignment7;
