import React, { useState, useEffect } from 'react';
import UserCard from "./UserCard";
import Empty from "./Empty";
import Pagination from './Pagination';
import "../Component/Styles/Users.css"
const style ={
    color:"yellow",
}


const url = "https://randomuser.me/api/?results=100";

  const Users=()=> {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(url)

    .then(response => response.json())
    .then(data => {
       setUsers(data.results);
       console.log(data)
    });

  
  }, []);



  return (
    <div className="users">
    {users.length > 0 ? (
      <div>
        <Pagination
          data={users}
          RenderComponent={UserCard}
          title="Active Users"
          pageLimit={5}
          dataLimit={12}
        />
      </div>
    ) : (
     <Empty/>
    )}
  </div>
)


}

export default Users