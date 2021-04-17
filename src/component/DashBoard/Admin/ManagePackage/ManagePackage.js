
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../../App';

<i class="fas fa-trash-alt"></i>
const ManagePackage = () => {
    const [plans, setPlans] = useState([])
    const [loading, setLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        const url = 'https://noboni-internet-service.herokuapp.com/managePackage?email=' + loggedInUser.email;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPlans(data)
                setLoading(true)
            })

    }, [])

    const deletedProduct = (id) => {
        const url = `https://noboni-internet-service.herokuapp.com/deleted/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('SuccessFully Delete your Products from Database.')
                }
            })
    }
    return (
        <div className="">
            <h1>Manage Service</h1>
                <table className="table table-striped ">
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">Package Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && plans.length > 0 ?
                            plans.map(plan =>
                                <tr>
                                    <td>{plan.name}</td>
                                    <td>$ {plan.price}</td>
                                    <button className="text-white btn my-2 my-sm-0 me-md-2 ml-3 mt-3" style={{ backgroundColor: '#C91729' }} onClick={() => deletedProduct(plan._id)}><FontAwesomeIcon icon={faTrash} /></button>
                                </tr>
                            )
                            :
                            <div className="text-center">
                                {loading ?
                                    <h4 className="mt-3 p-3 text-danger">You haven't any Service yet. Please add Service and come to this page.</h4>
                                    : <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '20%', marginLeft: '60%' }} role="status">
                                    </div>
                                }
                            </div>
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default ManagePackage;

{/*  */ }