import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    mediname: "",
    price: "",
    contact: "",
    image: "",

  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Medicine Details</h2>

          <div className="card">
            <div className="card-header">
              Medicine id : {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Mediname:</b>
                  {user.mediname}
                 
                </li>
                <li className="list-group-item">
                  <b>Price:</b>
                  {user.price}
               
                </li>
                <li className="list-group-item">
                  <b>Image:</b>
                  {user.image}
              
                </li>
                <li className="list-group-item">
                  <b>Contact:</b>
                  {user.contact}
                
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>
            Back to Home
          </Link>
          <Link className="btn btn-secondary my-2" to={"/home"}>
            Order!
          </Link>
        </div>
      </div>
    </div>
  );
}