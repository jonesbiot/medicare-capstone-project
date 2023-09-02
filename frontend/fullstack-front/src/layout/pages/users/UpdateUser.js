import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
  let navigate = useNavigate();

  const {id}=useParams()

  const [user, setUser] = useState({
    mediname: "",
    price: "",
    contact: "",
    image: "",

  });
  const { mediname, price, contact, image } = user;

  const onInputChange=(e)=>{
    setUser({...user, [e.target.name]: e.target.value });
  };
useEffect(()=>{
    loadUser()
},[]);



  const onSubmit = async (e) => {

    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user)
    navigate("/");
  };

  const loadUser = async ()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  };
  return (
    <div className="container">

      <div  className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
      <h2 className="text-center m-4">Update Medicine</h2>

      <form onSubmit={(e) => onSubmit(e)}>

       <div className="mb-3">
       <label htmlFor="Mediname" className="form-label">
                Mediname
              </label>
              <input
                type={"text"}
               className="form-control"
                placeholder="Enter mediname"
                name="mediname"
                value={mediname}
                onChange={(e) => onInputChange(e)}
               
              />

       </div>
       <div className="mb-3">
       <label htmlFor="Price" className="form-label">
                Price
              </label>
              <input
                type={"text"}
               className="form-control"
                placeholder="Enter medicine price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
               
              />
      </div>
      <div className="mb-3">
       <label htmlFor="Contact" className="form-label">
                Contact
              </label>
              <input
                type={"text"}
               className="form-control"
                placeholder="Enter  contact/e-mail"
                name="contact"
                value={contact}
                onChange={(e) => onInputChange(e)}
               
              />
      </div>
      <div className="mb-3">
       <label htmlFor="MedicineImage" className="form-label">
               MedicineImage
              </label>
              <input
                type={"text"}
               className="form-control"
                placeholder="Enter mediImage"
                name="image"
               value={image}
               onChange={(e) => onInputChange(e)}
              />
      </div>
      <button  type="submit" className="btn btn-outline-primary">
              Submit
              
      </button>
      <Link className="btn btn-outline-danger mx-2" to="/home">
              Cancel
              
      </Link>
      </form>

      </div>
      </div>
    </div>
  )
}
