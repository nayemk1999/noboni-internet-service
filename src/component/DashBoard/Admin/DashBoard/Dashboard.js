import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import UserPanel from '../../User/UserPanel/UserPanel';
import AdminPanel from './../AdminPanel'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [admin, setAdmin] = useState([])

    useEffect(() => {
        const url = 'https://noboni-internet-service.herokuapp.com/admin?email=' + loggedInUser.email
        fetch(url)
        .then(res => res.json())
        .then(data => setAdmin(data))
    }, [])
    return (
        <div >
            {
                admin.email ? 
                <AdminPanel></AdminPanel>
                :
                <UserPanel></UserPanel>
            }
            {/* <AdminPanel></AdminPanel> */}
            {/* <UserPanel></UserPanel> */}
        </div>

    );
};

export default Dashboard;