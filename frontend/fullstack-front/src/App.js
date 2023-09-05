import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './layout/pages/Home';
import {BrowserRouter as Router, Route, Routes} from  "react-router-dom";
import AddUser from './layout/pages/users/AddUser';
import UpdateUser from './layout/pages/users/UpdateUser';
import ViewUser from './layout/pages/users/ViewUser';
import Login from './layout/pages/users/Login';
import SignUp from './layout/pages/users/SignUp';
import Admin from './layout/pages/users/Admin';
import Customer from './layout/pages/users/Customer';




function App() {
  return (
    <div className="App">
      <Router>
   
      <Routes>

      <Route path="/" element={<Login/>}></Route>
      <Route exact path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/customer' element={<Customer/>}></Route>

      <Route exact path="/adduser" element={<AddUser/>} />
      <Route exact path="/home/updateuser/:id" element={<UpdateUser/>}/>
      <Route exact path="/viewuser/:id" element={<ViewUser />} />
      
      
      </Routes>
      

      </Router>
      
    </div>
  );
}

export default App;