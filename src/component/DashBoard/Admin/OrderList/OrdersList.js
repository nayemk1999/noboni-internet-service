import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://noboni-internet-service.herokuapp.com/ordersList')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                setLoading(true)
            })
    }, [])


    const handleChange = (e) => {
        let item = JSON.parse(e.target.value);
        const orderId = item.id;
        const status = item.status
        const orderItem = {orderId, status}

        fetch(`https://noboni-internet-service.herokuapp.com/updated/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('SuccessFully Updated your Package Status')
                }
                else{
                    console.log('Something Problem');
                }
            })
    }
    return (
        <div>
            <h2 className="fw-bold  text-center" style={{ color: 'crimson' }}>Your Order Details:</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col"> Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay With</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && orders.length > 0 ?
                        orders.map(order =>
                            <tr class="table-success">
                                <td>{order.name}</td>
                                <td>{loggedInUser.email}</td>
                                <td>{order.packageName}</td>
                                <td>Credit Card</td>
                                <td>
                                    <select onChange={handleChange} >
                                        <option value={JSON.stringify({ id: order._id, status: "pending" })}>{order.status}</option>
                                        <option value={JSON.stringify({ id: order._id, status: "onGoing" })}>onGoing</option>
                                        <option value={JSON.stringify({ id: order._id, status: "Done" })}>Done</option>
                                    </select>
                                </td>
                            </tr>
                        )
                        :
                        <div className="text-center m-auto">
                            {loading ?
                                <h4 className="mt-1 text-brand">You haven't placed any orders yet. Please order and come to this page.</h4>
                                :
                                <div class="spinner-border text-brand" style={{ width: '2rem', height: '2rem', marginTop: '30%', marginLeft: '120%' }} role="status">
                                </div>
                            }
                        </div>

                    }
                </tbody>
            </table>
            <h2 className="fw-bold mt-5 text-center" style={{ color: 'black' }}>Total Your Order Items: <span className='text-danger'>{orders.length}</span></h2>

        </div>
    );
};

export default OrdersList;