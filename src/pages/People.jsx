
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

let url = 'http://jsonplaceholder.typicode.com/users'


export const People = () => {
    const [users,setUsers] = useState([])
    useEffect(() => { 
       fetch(url)
       .then(res => res.json())
       .then(data =>{
        console.log(users)
        setUsers(data)})
    },[])
  return (
    <div>
      <h1>People page</h1>
      {/* { 
        users.map(user => ( 
            <div> 
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>

            </div> 
        ))
      } */}

      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Website</th>
      <th scope="col">#</th>
    </tr>
  </thead>
  <tbody>
        { 
          users.map(user => ( 
    <tr key ={user.id} >
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.website}</td>
      <td>
         <Link to={`/people/${user.id}`} >
         details
        </Link>
         </td>
     
    </tr>
          ))
        }
  </tbody>
</table>
    </div>
  );
}


