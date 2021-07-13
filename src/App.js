import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import About from './component/Home/About/About';
// import Dashboard from './component/DashBoard/Admin/DashBoard/Dashboard';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
// import UserPanel from './component/DashBoard/User/UserPanel/UserPanel'
import LoginForm from './component/FormCreate/LoginForm'
import RegisterForm from './component/FormCreate/RegisterForm';
import Dashboard from './component/Pages/Dashboard';
import { getDecodedUser } from './component/FormCreate/LoginManager';
import axios from 'axios';
import toast from 'react-hot-toast';

export const UserContext = createContext()

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());
  const [selectedService, setSelectedService] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
console.log(isAdmin);
  useEffect(() => {
    axios.get(`https://noboni-internet-service.herokuapp.com/admin?email=${loggedInUser.email}`)
      .then(res => {
        setIsAdmin(res.data);
      })
      .catch(error => toast.error(error.message))
  }, [loggedInUser.email]);

  return (
    <UserContext.Provider value={{loggedInUser, isAdmin, selectedService, setLoggedInUser, setSelectedService}}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/dashboard/:panel'>
            <Dashboard />
          </PrivateRoute>

          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/register-form'>
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;