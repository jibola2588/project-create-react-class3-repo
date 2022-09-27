import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'

export const Detail = () => { 
    const {id} = useParams();
    const [user,setUser]  = useState({})
     console.log(id)
    useEffect( () => { 
        fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setUser(data)
        })
    },[id])
  return (
    <div>
      <h1>Details of a user</h1>
      { user &&
       <div className="shadow">
         <h3>Name : {user.name}</h3>
         <p>Username : {user.username} </p>
         <p>Email : {user.email} </p>
         <p>Phone : {user.phone} </p>
       
         {/* <p>Company name: {user.company.name} </p> */}
         </div>
      }
      
    </div>
  );
}


