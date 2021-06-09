import React, { createContext, useState } from 'react';
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
import Dashboard from './component/DashBoard/Admin/DashBoard/Dashboard';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import UserPanel from './component/DashBoard/User/UserPanel/UserPanel'
import LoginForm from './component/FormCreate/LoginForm'
import RegisterForm from './component/FormCreate/RegisterForm';
import ContactForm from './component/FormCreate/ContactForm'

export const UserContext = createContext()
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/user/book/:id'>
            <UserPanel></UserPanel>
          </PrivateRoute>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/register-form'>
            <RegisterForm />
          </Route>
          <Route path='/contact-us'>
            <ContactForm />
          </Route>
          {/* <Route path='/admin/addServicePlan'>
          <AddServicePlan/>
        </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;