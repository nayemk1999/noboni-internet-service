import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Profile from '../Dashboard/Dashboard/Profile/Profile';
import Book from '../Dashboard/Dashboard/Book/Book';
import SideBar from '../Dashboard/Dashboard/SideBar/SideBar';
import './Dashboard.css';
import NavBar from '../Dashboard/Dashboard/NavBar/NavBar';
import BookList from '../Dashboard/Dashboard/BookList/BookList';
import Review from '../Dashboard/Dashboard/Review/Review';
import AddServices from '../Dashboard/Dashboard/AddService/AddServices';
import AddAdmin from '../Dashboard/Dashboard/AddAdmin/AddAdmin';
import OrderList from '../Dashboard/Dashboard/OrderList/OrderList';
import ManageService from '../Dashboard/Dashboard/ManageService/ManageService';
import AllReview from '../Dashboard/Dashboard/AllReview/AllReview';


const Dashboard = ({adminLoading}) => {
    const { isAdmin } = useContext(UserContext);
    const {panel}=useParams()
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <main className="dashboard-container">
          <SideBar show={showSidebar} adminLoading={adminLoading} />
            <div  id="content">
               <NavBar setShowSidebar={setShowSidebar} show={showSidebar}  />
                {
                    panel === "profile" ?  <Profile />
                    :panel === 'book' ? <Book />
                    :panel === "book-list" ? <BookList />
                    :panel === "reviews" ? <Review />
                    :panel === "add-services" && isAdmin ?  <AddServices />
                    :panel === "add-admins" && isAdmin  ? <AddAdmin />
                    :panel === "all-orders" && isAdmin  ? <OrderList />
                    :panel === "manage-services" && isAdmin  ? <ManageService />
                    :panel === "all-reviews" && isAdmin  ? <AllReview />
                    : null
                }
            </div>
        </main>
    );
};

export default Dashboard;