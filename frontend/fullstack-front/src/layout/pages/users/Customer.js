import { Link,Outlet } from "react-router-dom";

function Customer() {

    return(
        <div>
            <h2>Welcome to Customer Home Page</h2>
            <Link to="AddUser">View Medicine</Link>
            <Link to="/home">Logout</Link>
            <hr/>
            <Outlet></Outlet>
        </div>
    )

}

export default Customer;
