import { Link,Outlet } from "react-router-dom";

function Admin() {

    return(
        <div>
            <h2>Welcome to Admin Home Page</h2>
             <Link to="AddUser">Add Medicine</Link>
            <Link to="/Home">Logout</Link>
            <hr/>
            <Outlet></Outlet>
        </div>
    )

}

export default Admin;
