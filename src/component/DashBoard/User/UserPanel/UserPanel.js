import { faFolder, faGripHorizontal, faPlusCircle, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dashboard } from '@material-ui/icons';
import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { UserContext } from '../../../../App';
import DashboardNavbar from '../../DashboardNavbar/DashboardNavbar';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Reviews from '../Reviews/Reviews';
import '../../../DashBoard/Admin/Sidebar.css'
import Home from '../../../Home/Home/Home';
const UserPanel = () => {
    const { id } = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <DashboardNavbar />
            <h5 className='text-center dashboardWel p-2' >Welcome User Dashboard <span className='text-brand'>{loggedInUser.displayName}</span></h5>
            <div className='container'>
                <div className=' row'>
                    <Router>
                        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/user/dashboard" className="text-white">
                                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/user/book' className="text-white">
                                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Book</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/user/orderList' className="text-white">
                                        <FontAwesomeIcon icon={faFolder} /> <span>Book List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/user/review' className="text-white">
                                        <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
                                    </Link>
                                </li>
                            </ul>
                            <div>
                                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                            </div>
                        </div>

                        <div className="col-md-10">
                            <Switch>
                                <Route exact path="/">
                                    <Book id={id}></Book>
                                </Route>
                                <Route exact path="/user/dashboard">
                                    <Dashboard />
                                </Route>
                                <Route path="/user/book">
                                    <Book id={id}></Book>
                                </Route>
                                <Route path="/user/review">
                                    <Reviews></Reviews>
                                </Route>
                                <Route path="/user/orderList">
                                    <BookingList></BookingList>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </div>

    );
};

export default UserPanel;