import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar';



export default function Home() {
    const [users, setUsers] = useState([]);

    const  {id} = useParams()

    useEffect(() => {
        loadUsers();
      },[]);

      const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        //console.log(result.data)
        setUsers(result.data);
        
      };
    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }

  return (
    <div  className="container">
       <Navbar />
        <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Mediname</th>
      <th scope="col">Price($)</th>
      <th scope="col">MediImage</th>
      <th scope="col">Contact/email</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    {
         users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.mediname}</td>
              <td>{user.price}</td>
              <td><img src={user.image} alt={`Image for ${user.mediname}`} width={50 } /></td>
              <td>{user.contact}</td>
            
            <tb>
            <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>

                <Link className="btn btnoutline -primary mx-2"
                  
                  to={`updateuser/${user.id}`}>
                  Update</Link>

                <button
                 className="btn btn-danger mx-2" 
                onClick={()=>deleteUser(user.id)}

                >Delete</button>
                
            </tb>
          </tr>  
         ))
    }
    
            </tbody>
           </table>
        </div>
    </div>
  );
}
